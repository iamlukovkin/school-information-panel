import type {FC} from "react";

export type ImagesContainerProps = {
    images: Record<string, string>;
}

export const ImagesContainer: FC<ImagesContainerProps> = ({images}) => {
    return (
        <div className='image-container'>
            {Object.values(images).map((image) => (<img src={image} alt={image}/>))}
        </div>
    )
}