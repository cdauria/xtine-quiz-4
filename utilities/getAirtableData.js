import Airtable from "airtable";

const getAirtableData = async (options) => {
    const base = new Airtable({ apiKey: process.env.AIRTABLE_PERSONALITY_QUIZ_API_KEY }).base(process.env.AIRTABLE_PERSONALITY_QUIZ_BASE_ID);
    const records = await base('One').select({}).all();
    const processedData = records.map((record) => {
        const { id, fields } = record;
        return {
            id,
            ...fields,
        };
    });
    console.log(records)
    return processedData
} 

export default getAirtableData