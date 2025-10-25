import * as deepl from 'deepl-node';
import fs from 'fs';
import dotenv from "dotenv";
dotenv.config();


const translator = new deepl.Translator(process.env.DEEPL_API_KEY);
const uk = JSON.parse(fs.readFileSync('./src/locales/uk.json', 'utf8'));

async function translateObject(obj, targetLang) {
  const result = {};
  for (const key in obj) {
    const value = obj[key];
    if (typeof value === 'string') {
      const res = await translator.translateText(value, 'uk', targetLang);
      result[key] = res.text;
    } else {
      result[key] = await translateObject(value, targetLang);
    }
  }
  return result;
}

(async () => {
  try {
    console.log('Translating to English...');
    const en = await translateObject(uk, 'en-GB');
    fs.writeFileSync('./src/locales/en.json', JSON.stringify(en, null, 2));
    console.log('✅ English translation saved.');

    console.log('Translating to Hungarian...');
    const hu = await translateObject(uk, 'hu');
    fs.writeFileSync('./src/locales/hu.json', JSON.stringify(hu, null, 2));
    console.log('✅ Hungarian translation saved.');
  } catch (err) {
    console.error('❌ Translation failed:', err.message);
  }
})();
