import * as React from "react"
import styled from "styled-components"
import Layout from "../components/layout"

const StyledUL = styled.ul`
margin-left:2em;
`;

const Publications = () => {
    return (
        <Layout>
            <h2>Publikacje</h2>
            <StyledUL>
                <li>"Bitwa ułanów Legii Nadwiślańskiej pod Strugą". „Karkonosz” materiały krajoznawcze nr 1/1984. Studenckie Koło Przewodników Sudeckich 1984.</li>
                <li>"Drewniane budownictwo sakralne Dolnego Śląska". „Pielgrzymy” materiały krajoznawcze 1984. Studenckie Koło Przewodników Sudeckich 1984.</li>
                <li>"Zbiorniki retencyjne na Nysie Kłodzkiej". „Pielgrzymy” materiały krajoznawcze 1997. Studenckie Koło Przewodników Sudeckich 1997.</li>
                <li>"Drewniane kościoły w Sudetach". Seria 7 artykułów, Miesięczniki „Sudety” od nr 2001/2. Miesięcznik „Sudety”</li>
                <li>"Kościół w Starej Kamienicy p.w. Ścięcia św. Jana Chrzciciela" Witold Hermaszewski, Witold Papierniak Miesięcznik „Sudety” nr 7/8 2002.</li>
                <li>"Do góry sercami". Miesięcznik „Sudety” nr 1 2003.</li>
                <li>"Kościół zamkowy w Świnach". Miesięcznik „Sudety” nr 2 2003.</li>
                <li>"Muzeum Rzemiosł w Letohradzie". Miesięcznik „Sudety” nr 3 2003.</li>
                <li>"Nożycami po Biblii… dla Bożej chwały". Miesięcznik „Sudety” nr 3 2003.</li>
                <li>"Worek mitów i garść faktów o podziemiach pod zamkiem Książ". Miesięcznik „Sudety” nr 4 2003.</li>
                <li>"Ogród botaniczny w Libercu". Miesięcznik „Sudety” nr 5 2003.</li>
                <li>"Kościół zamkowy w Świnach". Miesięcznik „Sudety” nr 5 2003.</li>
                <li>"Jaskinia na Pomezi". Miesięcznik „Sudety” nr 7 2003.</li>
                <li>"Arboretum w Wojsławicach". Miesięcznik „Sudety” nr 7 2003.</li>
                <li>"Spełniony testament hrabiny". Miesięcznik „Sudety” nr 8 2003.</li>
                <li>"Gotyckie malarstwo w kościele Wszystkich Świętych w Strzelcach Świdnickich". Miesięcznik „Sudety” nr 9 2003.</li>
                <li>"Zapora wodna i jezioro Pastviny cz1i 2". Miesięcznik „Sudety” nr 10,11 2003.</li>
                <li>"Salomon z Kuksu". Miesięcznik „Sudety” nr 1 2004.</li>
                <li>"Rzeka złodziejka". Miesięcznik „Sudety” nr 2 2004.</li>
                <li>"Twierdza w Dobrošovie". Miesięcznik „Sudety” nr 3 2004.</li>
                <li>"Na pięć ołtarzy". Miesięcznik „Sudety” nr 3 2004.</li>
                <li>"Wodospad z fałszywką". Witold Hermaszewski, Witold Papierniak Miesięcznik „Sudety” nr 3 2004.</li>
                <li>"Zapomniana popękana góra". Miesięcznik „Sudety” nr 5 2004.</li>
                <li>"Kościół Wniebowzięcia Panny Marii w Orlicy". Miesięcznik „Sudety” nr 5 2004.</li>
                <li>"Zapomniane jaskinie". Witold Hermaszewski, Iwona Chomiak, Miesięcznik „Sudety” nr 6 2004.</li>
                <li>"Jaskinia Północna Duża w górze Połom". Miesięcznik „Sudety” nr 7 2004.</li>
                <li>"Księga henrykowska". Miesięcznik „Sudety” nr 11 2004.</li>
                <li>"Ślężańskie lwy". Miesięcznik „Sudety” nr 12 2004.</li>
                <li>"Zamek Vranov w Malej Skale". Miesięcznik „Sudety” nr 2 2005.</li>
                <li>"Tajemnicze znaki „X”". Miesięcznik „Sudety” nr 3 2005.</li>
                <li>"Romańska kruchta barokowego ołtarza". Miesięcznik „Sudety” nr 6 2005.</li>
                <li>"Otwarte muzeum techniki w Dzierżoniowie". Witold Hermaszewski, Witold Papierniak, Miesięcznik „Sudety” nr 7 2005.</li>
                <li>"Legenda i prawda o krzyżach pokutnych z Wierzbnej". Miesięcznik „Sudety” nr 9 2005.</li>
                <li>"Kościół św. Jerzego w Dzierżoniowie" cz.1, 2,3,4,5,6. Witold Hermaszewski, Ewa Chabros Miesięcznik „Sudety” 2005.</li>
                <li>"Z Krzeszowa do Wierzbnej". Miesięcznik „Sudety” nr 10 2005.</li>
                <li>"Barokizacja kościoła klasztornego w Henrykowie". Miesięcznik „Sudety” nr 12 2005.</li>
                <li>"Cudowne miejsce codziennych modłów". Miesięcznik „Sudety” nr 1 2006.</li>
                <li>"Ołtarz główny kościoła klasztornego w Henrykowie". Miesięcznik „Sudety” nr 2 2006.</li>
                <li>"Kaplica Marii Magdaleny w Henrykowie". Witold Hermaszewski. Miesięcznik „Sudety” nr 3 2006.</li>
                <li>"Święte schody w Sośnicy". Miesięcznik „Sudety” nr 4 2006.</li>
                <li>"Artystyczne zagadki kościoła w Kałkowie". Miesięcznik „Sudety” nr 4 2006.</li>
                <li>"Kościół klasztorny w Henrykowie. Nagrobki piastowskie". Miesięcznik „Sudety” nr 4 2006.</li>
                <li>"Suchy zbiornik retencyjny pod Bolkowem". Miesięcznik „Sudety” nr 5 2006.</li>
                <li>"Kościół klasztorny w Henrykowie. Romańskie początki". Miesięcznik „Sudety” nr 5 2006.</li>
                <li>"Figurka matki Boskiej w Bardzie – początki kultu". Miesięcznik „Sudety” nr 7 2006.</li>
                <li>"Architektura barokowa kościoła p.w. Nawiedzenia NPMarii w Bardzie". Miesięcznik „Sudety” nr 9 2006.</li>
                <li>"Zagadkowe czapki w tympanonie w Strzegomiu". Miesięcznik „Sudety” nr 11 2006.</li>
                <li>"Kościół p.w. Nawiedzenia NPMarii w Bardzie. Tajemnica ambony". Miesięcznik „Sudety” nr 2 2007.</li>
                <li>"Dlaczego Bolków wygrał ze Świnami". Miesięcznik „Sudety” nr 4 2008.</li>
                <li>"Zamek Bolków. Wieża w kształcie łezki". Miesięcznik „Sudety” nr 5 2008.</li>
                <li>"Małe muzeum przyrodnicze „Szindelka” w Harrahovie" Miesięcznik „Sudety” nr 4 2009.</li>
                <li>"Tyrolczycy w Mysłakowicach" Miesięcznik „Sudety” nr 8 2009.</li>
            </StyledUL>
        </Layout>)
}

export default Publications