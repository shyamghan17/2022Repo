import axios from 'axios';

export default axios.create({
    baseUrl: 'https://www.dictionaryapi.com/api/v3/references/thesaurus/json/umpire?key=your-api-key',
    
})