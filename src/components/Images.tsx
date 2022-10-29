import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import { getImagesPending} from "../store/actions";
import {useDispatch, useSelector} from "react-redux";
import {getImages} from "../store/selectors";
import {Loading} from "./Loading";
import {ImageContainer, ImageCard, Img, Button } from "../styles";
import {Image} from "../types";

const Images: React.FC = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {images, loadImages} = useSelector(getImages)
    const [page, setPage] = useState<number>(1)

    useEffect(() => {
        dispatch(getImagesPending(id, page));
    }, [id, page, dispatch])

    return (
        loadImages && !images.length
            ? <Loading />
            : <div style={{marginLeft: 140}}>
                <ImageContainer>
                    {images.map((image: Image, i: number) => (
                        <ImageCard key={`${image.id} + ${i}`}>
                            <Img src={image.url} alt={`${image.id}`}/>
                        </ImageCard>
                    ))}
                </ImageContainer>
                <Button onClick={() => setPage(prevState => prevState + 1)}>Load More</Button>
            </div>
    );
};

export default Images;