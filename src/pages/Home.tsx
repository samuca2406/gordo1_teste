import { Card } from "../componets/Card";
import gospel from "../img/gospel.jpg"
import sertanejo from "../img/sertanejo.jpg"
import trap from "../img/trap.png"  
export function Home() {
 const musicas = [
  {
    title: "Musica Gospel",
    text: "Algumas músicas para você",
    image: gospel,
    link: "https://youtu.be/tcCzoQ5tE48"
  },
  {
    title: "Musica Sertanejo",
    text: "Algumas músicas para você",
    image: sertanejo,
    link: "https://www.youtube.com/watch?v=yZh9a-QX3Yo"
  },
  {
    title: "Trap",
    text: "Algumas músicas para você",
    image: trap,
    link: "https://youtu.be/7iDtrh0K4Vg"
  }
]

  return (
    <div className="container mt-5">
      <h1 className="text-center">Seja bem vindo ao projeto</h1>

      <div className="row mt-4">
        {musicas.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <Card {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}