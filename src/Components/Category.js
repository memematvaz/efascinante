import React from 'react';
import data from '../data.json'

const Category = () => {
    let categoryObject = data.category
    return(
        <section className="category">
          <h2 className="title title--category">Category</h2>
          <ul className="category-list">
              {categoryObject.map(category =>
              <li className="category-list__item" key={category.post_id}>
                    <p className="overtext">{category.category.name} | <span className="overtext--light">{category.subcategory.name}</span></p>
                    <h1 className="title title--section">{category.title}</h1>
                    <img className="category-list__image" src={category.cover_image.url} alt="Buscar"></img>
                    <p className="description description--section">{category.summary}</p>
                    <div className="info__text-container">
                        <p className="info-text">{category.author.name}</p>
                        <p className="info-text"><span className="info-text--light">{category.date_post} · </span>{category.readtime}</p>
                    </div>
                    <div className="info__share-container">
                        <a className="icon icon-facebook" href="" title="Facebook" aria-label="Facebook"></a>
                        <a className="icon icon-share" href="" title="Compartir" aria-label="Compartir"></a>
                    </div>
              </li>
              )
              }
          </ul>
          <p className="title title--read">Read more</p>
        </section>
    )

}


export default Category;