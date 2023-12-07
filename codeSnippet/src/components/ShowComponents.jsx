import { useContext } from "react";
import { ComponentContext, UserContext } from "../context/CreateContext";
import { LiveProvider, LivePreview, LiveEditor, LiveError } from "react-live";
function ShowComponents() {
  const { user } = useContext(UserContext);
  const { deleteComponent, showData } = useContext(ComponentContext);

  const deleteHandler = (id) => {
    deleteComponent(id);
  };

  return (
    <div className='components space-y-3'>
      {showData?.components
        ? showData.components.map((val) => {
            return (
              val.snippets &&
              val.snippets.map((snippet) => {
                return (
                  <div key={snippet._id}>
                    <h1 className='text-lg font-semibold'>{snippet.title}</h1>
                    <div className='flex justify-between items-center'>
                      <h1 className='px-3 border-2 py-1 text-sm text-gray-700 w-fit rounded-lg font-semibold'>
                        {snippet.language}
                      </h1>
                      {user ? (
                        user._id === val.userId ? (
                          <button
                            onClick={() => {
                              deleteHandler(snippet._id);
                            }}
                            className='px-5 border-2 py-1 hover:bg-gray-200 text-gray-700 w-fit rounded-lg font-semibold'>
                            Delete
                          </button>
                        ) : (
                          ``
                        )
                      ) : (
                        ""
                      )}
                    </div>
                    <LiveProvider
                      code={snippet.code}
                      language={snippet.language}>
                      <LivePreview className='p-2 border-2 rounded-md mt-2 border-dashed' />
                      <LiveError className='text-red-500' />
                      <LiveEditor className='mt-2' />
                    </LiveProvider>
                  </div>
                );
              })
            );
          })
        : "No Code Added"}
    </div>
  );
}

export default ShowComponents;
