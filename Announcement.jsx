import  styled  from "styled-components"

const Container= styled.div`
 height: 30px;
 background-color: teal;
 color: white;
`

const Announcement = () => {
    return(
        <Container>
           Super Deal! Free Shipping on Orders over $50
        </Container>
    )
}

export default Announcement