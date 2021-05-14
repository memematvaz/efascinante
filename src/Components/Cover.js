import React from 'react';
import data from '../data.json'

const Cover = () => {
    let coverObject = data.cover[0]
    return(
        <div className="cover">
            <div className="cover__image" style={{backgroundImage: `url(${coverObject.cover_image.url})`}}></div>
            <div className="cover__gradient">
                <div className="cover__text-container">
                    <div className="overtext__container">
                        <p className="overtext">{coverObject.category.name}</p>
                        <p className="overtext overtext--light">{coverObject.subcategory.name}</p>
                    </div>
                    <h1 className="title">{coverObject.title}</h1>
                    <p className="description">{coverObject.summary}</p>
                </div>
                <div className="info">
                    <div className="info__text-container">
                        <p className="info-text info-text--cover">{coverObject.author.name}</p>
                        <p className="info-text info-text--cover"><span className="info-text--light">{coverObject.date_post} · </span>{coverObject.readtime}</p>
                    </div>
                    <div className="info__share-container">
                        <a className="icon icon-facebook icon-facebook--inverted-mobile" href="" title="Facebook" aria-label="Facebook"></a>
                        <a className="icon icon-share icon-share--inverted-mobile" href="" title="Compartir" aria-label="Compartir"></a>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default Cover;