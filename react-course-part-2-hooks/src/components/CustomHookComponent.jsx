import UseFetch from '../CustomHook'

function CustomHookComponent() {

    const {data} = UseFetch('https://jsonplaceholder.typicode.com/posts')
    // console.log(data);

    return (
        <div>
               { data && data.length > 0
          ? data.map((dataItem, index) => 
          <p> {`id ${dataItem.id}; index ${index}: `} {dataItem.title}</p>
          // <p> {`id: ${dataItem.id}`}; name: {dataItem.name}; e-mail: {dataItem.email};  rollnumber: {dataItem.rollnumber}; </p> 
          ) : null 
        }
        </div>
    )
} 

export default CustomHookComponent;