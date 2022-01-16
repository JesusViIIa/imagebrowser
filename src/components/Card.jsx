import './css/header.css'
export default function Card({img,title,link}) {

    const download = e => {
        fetch(e.target.href, {
          method: "GET",
          headers: {}
        })
          .then(response => {
            response.arrayBuffer().then(function(buffer) {
              const url = window.URL.createObjectURL(new Blob([buffer]));
              const link = document.createElement("a");
              link.href = url;
              link.setAttribute("download", `${title}.png`); //or any other extension
              document.body.appendChild(link);
              link.click();
            });
          })
          .catch(err => {
            console.log(err);
          });}


    return (
      <div className="card">
        <img src={img} alt={title} />
        <a
          href={link}
          download
          onClick={(e) => {
              e.preventDefault()
            download(e);
          }}
        >
            <i className="fas fa-arrow-down download"></i>
        </a>
      </div>
    );
}
