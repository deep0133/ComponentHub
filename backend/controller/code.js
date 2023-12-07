const Code = require('../model/code');
const User = require('../model/user');


const addCode = async (req, res) => {
    try {
        const { codeSnippet, language, title } = req.body;

        console.log(codeSnippet, language, title)

        const userId = req.user._id

        if (!codeSnippet || !language || !title)
            return res.status(206).json({
                success: false,
                message: "All fields required."
            })

        // check user with this email exist or not:
        let code = await Code.findOne({ userId: userId });

        if (!code) {
            code = await Code.create({
                userId,
                snippets: [{
                    language,
                    title,
                    code: codeSnippet
                }]
            })
        }
        else {
            code.snippets.push({
                language,
                title,
                code: codeSnippet
            })
        }

        await code.save();

        // Update the user's schema by decrement the noOfComponent
        await User.findOneAndUpdate(
            { _id: userId },
            {
                $inc: { noOfComponent: 1 }
            }
        );

        return res
            .status(200)
            .json({
                success: true,
                message: "Code added successfully",
            });
    } catch (err) {
        return res.status(500).json({ success: false, message: err.message, err: err });
    }
}

const removeCode = async (req, res) => {
    try {
        const { codeId } = req.body;

        const userId = req.user._id

        // check user with this email exist or not:
        let user = await Code.findOne({ userId: userId });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "No User Found"
            })
        }

        // Code Searching and removing from array:
        const result = await Code.updateOne(
            { 'snippets._id': codeId, userId: userId },
            { $pull: { snippets: { _id: codeId } } }
        );

        if (result.modifiedCount > 0) {
            // Update the user's schema by decrement the noOfComponent
            await User.findOneAndUpdate(
                { _id: userId },
                {
                    $inc: { noOfComponent: -1 }
                }
            );
            res.status(200).json({ success: true, message: 'Code removed successfully' });
        } else {
            res.status(404).json({ success: true, message: 'Code not found' });
        }

    } catch (err) {
        return res.status(500).json({ success: false, message: err.message, err: err });
    }
}

const allCode = async (req, res) => {
    try {
        const components = await Code.find({});
        res.status(200).json({
            success: true,
            components
        })
    } catch (err) {
        return res.status(500).json({ success: false, message: err.message, err: err });
    }
}

const specificUserCode = async (req, res) => {
    try {
        const components = await Code.findOne({ userId: req.user._id });
        res.status(200).json({
            success: true,
            components
        })
    } catch (err) {
        return res.status(500).json({ success: false, message: err.message, err: err });
    }
}


module.exports = {
    addCode,
    removeCode,
    allCode,
    specificUserCode
}