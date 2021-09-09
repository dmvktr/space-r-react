import React, {useState} from "react";
import Modal from "react-modal";
import Moment from "react-moment";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {
    ArticleContainer,
    ArticleNewsSite,
    ArticleTitle,
    ModalArticleStats,
    ModalArticleSummary,
    ModalArticleUrl,
    ModalCloseButton,
    ModalCloseDiv,
    ModalContainer,
    ModalCustomStyles,
    ModalHdImg,
    ModalImageDiv,
    ModalTitle,
    SingleNewsElement,
} from "../layout/NewsElement";

const Articles = (props) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }


    return (
        <React.Fragment>
            <SingleNewsElement onClick={openModal}>
                <ArticleTitle>{props.article.title}</ArticleTitle>
                <ArticleContainer picture={props.article.imageUrl}>
                    <ArticleNewsSite>{props.article.newsSite}</ArticleNewsSite>
                </ArticleContainer>
            </SingleNewsElement>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={ModalCustomStyles}
                contentLabel="Modal"
                onClick={closeModal}
            >
                <ModalContainer>
                    <ModalTitle>{props.article.title}</ModalTitle>
                    <ModalCloseDiv>
                        <ModalCloseButton icon={faTimes} onClick={closeModal}>X</ModalCloseButton>
                    </ModalCloseDiv>

                    <ModalArticleSummary>{props.article.summary}</ModalArticleSummary>
                    <ModalArticleUrl href={props.article.url}>
                        Source:
                        <br/>
                        {props.article.url}
                    </ModalArticleUrl>
                    <ModalImageDiv>
                        <ModalHdImg src={props.article.imageUrl} onClick={closeModal}/>
                    </ModalImageDiv>
                    <ModalArticleStats>
                        <Moment>{props.article.publishedAt}</Moment> <br/>
                        {props.article.newsSite}
                    </ModalArticleStats>
                </ModalContainer>
            </Modal>
        </React.Fragment>
    );
};

export default Articles;
