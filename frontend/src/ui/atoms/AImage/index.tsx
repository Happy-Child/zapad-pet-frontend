import React from "react";
import { TAImage } from "./types";
import "./style.scss"
import cn from 'classnames';

function getX2Image(src: string): React.ReactNode {
  return <source srcSet={`${src} 2x`} />;
}

function setRatio({ width, height }: { width: number, height: number }): { paddingTop: string } {
  const resultPercent = height * 100 / width;
  return { paddingTop: `${resultPercent}%` };
}

const AImage: React.FC<TAImage> = ({ className = '', src, src2x, alt = '', ratio = false, width, height }: TAImage) => {
  return (
    <picture
      className={cn('a-image', { 'a-image_ratio': ratio }, className)}
      style={(ratio && width && height) ? setRatio({ width, height }) : {}}
    >
      { src2x && getX2Image(src2x) }
      <img className="a-image__img" src={src} alt={alt} />
    </picture>
  )
};

export { AImage };
