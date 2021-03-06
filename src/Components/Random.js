import React from 'react';
import data from '../data.json'

const Random = () => {
    let randomObject = data.random
    return(
        <section className="random">
          <ul className="random-list">
              {randomObject.map(random =>
              <li className="random-list__item" key={random.post_id}>
                   <div className="overtext__container">
                        <p className="overtext">{random.category.name}</p>
                        <p className="overtext overtext--light">{random.subcategory.name}</p>
                    </div>
                    <div className="overtext__image-title">
                        <img className="random-list__image" src={random.cover_image.url} alt="Buscar"></img>
                        <div>
                            <h2 className="title">{random.title}</h2>
                            <p className="description">{random.summary}</p>
                        </div>
                    </div>
                    <div className="random__info">
                        <div className="info__text-container">
                            <p className="info-text">{random.author.name}</p>
                            <p className="info-text"><span className="info-text--light">{random.date_post} · </span>{random.readtime}</p>
                        </div>
                        <div className="info__share-container">
                            <a className="icon icon-facebook" href="" title="Facebook" aria-label="Facebook"></a>
                            <a className="icon icon-share" href="" title="Compartir" aria-label="Compartir"></a>
                        </div>
                    </div>
              </li>
              )
              }
          </ul>
        </section>
    )

}


export default Random;