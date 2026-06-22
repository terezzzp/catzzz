const fortunes = [
  '„Dnes se ti otevře cesta, která vypadá jako tajná brána. Jdi po ní opatrně, kočka to schválila.“',
  '„Malé štěstí si najde cestu až po odvážném kroku. Nečekej, až vše přijde samo.“',
  '„Když dnes někde něco nefunguje, je to jen signál, že se připravuje lepší možnost.“',
  '„Mírný dotek náhody tě zavede tam, kde tě nikdo nečeká. Buď otevřená.“',
  '„Tvůj úsměv dnes bude mít větší sílu, než si myslíš. Rozděl ho laskavě mezi lidi.“',
  '„Kočka říká: nezapomeň na odpočinek. I tiché chvíle umí přinést nejlepší nápady.“',
  '„Dnes je dobrý den na jediné správné rozhodnutí. Přestaň váhat a sleduj své srdce.“',
  '„Nejdřív se bude zdát, že nic není jisté, ale pak se vše vyjasní jako ranní duha.“'
];

const button = document.getElementById('fortuneButton');
const fortuneText = document.getElementById('fortuneText');

button.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  fortuneText.textContent = fortunes[randomIndex];
});
