import Page from "./Page"

let data = [
  { id: 1, background: "bisque", title: "Веломастерская “Велозар”", text: "Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды."},
  { id: 2, background: "aqua", title: "Что мы предлагаем", text: "В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта. Все работы выполняем качественно и с душой."},
  { id: 3, background: "white", title: "", text: "Приехав к нам однажды, многие наши клиенты становятся постоянными, а часть из них даже друзьями. А также в нашей мастерской можно отремонтировать электросамокат и электровелосипед."},
  { id: 4, background: "", title: "", text: ""},
  { id: 5, background: "white", title: "Прокат велосипедов", text: "У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды. Как раз мы находимся в прекрасном парке!"}
]
function Pageslist() {
return (
    <div style={{display: "flex", gap: "50px"}}>
       {data.map((elem) => (
        <Page
          key={elem.id}
          color={elem.background}
          title={elem.title}
          text={elem.text}
        />
      ))}
    </div>
)
       }
export default Pageslist