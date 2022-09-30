import Styles from '../styles/footer.module.css'

export default function Footer(){
    return(
        <>  
            <div id={Styles.footer}>
                <h3>Isto é um exemplo de footer 😎😎</h3>
                <h3>Feito por: Vinicius com ajuda de <a href="https://victordev.vercel.app" target="_blank">Victor</a> 😉😉</h3>
            </div> 
        </>
    );
};