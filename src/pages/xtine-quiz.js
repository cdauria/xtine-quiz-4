import React from "react"
import styles from '../styles/Home.module.css'
import getAirtableData from "../../utilities/getAirtableData"

export default (props) => {
  return (
         <div>
            {props.data.map((question) => (
                <div key={question.id}>
                </div> 
            ))}
    <pre>{JSON.stringify(props, null, 4)}</pre>
        </div>
    );
};


export async function  getServerSideProps(context) {
    console.log("getting serverside props")
    console.log(JSON.stringify(context.params, null, 4))
    const processedData = await getAirtableData()
    console.log(JSON.stringify(processedData, null, 4))
    return {
        props: {
            data: processedData,
        },
    };
}