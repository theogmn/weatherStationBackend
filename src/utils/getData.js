import axios from 'axios';
import cheerio from 'cheerio';

export default async function get() {

  const { data } = await axios.get(
    'http://alertadecheias.inea.rj.gov.br/alertadecheias/214109520.html'
  );

  if (data) {
    const html = data;
    
    const page = await cheerio.load(html);
    

    const riverLevelsHtml = page('#Table > tbody > tr > td');
    const river = {};

 
    river.date = riverLevelsHtml
      .eq(0)
      .text();

    river.min15 = riverLevelsHtml
      .eq(1)
      .text();

    river.hour1 = riverLevelsHtml
      .eq(2)
      .text();

    river.hour4 = riverLevelsHtml
      .eq(3)
      .text();

    river.hour24 = riverLevelsHtml
      .eq(4)
      .text();
    river.hour96 = riverLevelsHtml
      .eq(5)
      .text();
    river.day30 = riverLevelsHtml
      .eq(6)
      .text();
    river.level = riverLevelsHtml
      .eq(7)
      .text();
    
    if(river.level === "Dado Nulo"){
      river.level = 0.0;
    }

    river.cote =  Math.round((river.level * 100) / 2.10);

    return river;
  }
}