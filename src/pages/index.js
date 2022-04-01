import * as React from 'react'
import { Link, graphql } from "gatsby";
import Layout from "../components/layout"
import styled from "styled-components";
import moszna from "../images/moszna.jpg"
import berlin from "../images/berlin-reichstag.jpg"

const StyledBusinessSection = styled.section`
background-image: url(${berlin});
background-size: cover;
background-position: center;
filter: opacity(100%);
& p {background-color:rgba(250,250,250,.6); margin:.5rem; padding:.5rem;}
&:hover { transform: scale(1.01);}
ul {padding-left:0; margin:0; list-style-type: none; }
a {background-color:#ddc; padding:.5rem 1rem; font-weight:700;}
`;

const StyledSchoolSection = styled.section`
background-image: url(${moszna});
background-size: cover;
background-position: center;
&:hover { transform: scale(1.01);}
ul {padding-left:0; margin:0; list-style-type: none; }
a {background-color:#ddc; padding:.5rem 1rem; font-weight:700;}
`;

const StyledPilgrimageSection = styled.section`
background-image: url(${moszna});
background-size: cover;
background-position: center;
&:hover { transform: scale(1.01);}
a {background-color:#ddc; padding:.5rem 1rem; font-weight:700;}
`;

const StyledInsuranceSection = styled.section`
&:hover {background-size: 101%;}
a {background-color:#ddc; padding:.5rem 1rem; font-weight:700;}
`;

const StyledNewSection = styled.section`
flex-basis:90%;
min-width:100%;
/* background-image: url(${moszna}); */
/* background-size: cover;
background-position: center; */
background-color:rgba(250,250,250,.7);
&:hover {background-size: 140%;}
ul {padding-left:0; margin:0; list-style-type: none; }
a {background-color:#ddc; padding:.5rem 1rem; font-weight:700;}
`;

const IndexPage = ({ data }) => {

  const ArrayWPContentFeatured = data.WPContentFeatured.edges.map((trip) => trip)
  const ArrayWPContentBusiness = data.WPContentBusiness.edges.map((trip) => trip)
  const ArrayWPContentSchool = data.WPContentSchool.edges.map((trip) => trip)

  return (
    <Layout>
      <div className="hero">
        <p>Przewodnik wrocławski i sudecki Witold Hermaszewski zaprasza do wspólnego zwiedzania. Wrocław i Dolny Śląsk są przebogate w atrakcje.</p>
        <p>Jestem przewodnikiem zakochanym w regionie. Możesz z moim biurem zwiedzać Wrocław, Dolny Śląsk, Polskę, Czechy i Niemcy. Ze mną i moimi przewodnikami nie zbłądzisz. Zobaczysz, poznasz i zrozumiesz otaczający świat i dorobek pokoleń. Zamów wycieczkę lub przewodnika, a będziesz zachwycony. Zobaczysz, że do Wrocławia i w Sudety wrócisz, bo warto.</p>
      </div>
      <div className="offer">

        <StyledNewSection>
          <h4>Wyróżnione</h4>
          <ul>
            {ArrayWPContentFeatured.map(({ id, node }) => (
              <li key={id}>
                <Link to={`/wycieczka/${node.slug}`}>{node.title}</Link>
              </li>
            ))}
          </ul>
        </StyledNewSection>

        <StyledBusinessSection>
          <h4>Oferta dla dorosłych (firmy, organizacje)</h4>

          <p>Przedłożone propozycje wyjazdów dla firm mają charakter krajoznawczy i integracyjny.
            Proponowane miejsca do zwiedzania są ciekawe i wartościowe do poznania zabytków kultury i sztuki oraz atrakcji przyrodniczych. Programy mają na cel pokazanie zalet, charakteru i różnorodności sąsiednich krajów oraz samej Polski.</p>
          <p>
            Biuro HERMASZEWSKI TRAVEL jest w stanie napisać dowolny program wyjazdu pod życzenie Klienta.
            Witold Hermaszewski jest miłośnikiem historii oraz architektury i sztuki i jest w stanie zorganizować i poprowadzić specjalistyczne wyjazdy.</p>

          <ul>
            {ArrayWPContentBusiness.map(({ id, node }) => (
              <li key={id}>
                <Link to={`/wycieczka/${node.slug}`}>{node.title}</Link>
              </li>
            ))}
          </ul>
        </StyledBusinessSection>
        <StyledSchoolSection>
          <h4>Wycieczki szkolne</h4>

          <ul>
            {ArrayWPContentSchool.map(({ id, node }) => (
              <li key={id}>
                <Link to={`/wycieczka/${node.slug}`}>{node.title}</Link>
              </li>
            ))}
          </ul>
        </StyledSchoolSection>
        <StyledPilgrimageSection>
          <h4>Pielgrzymki</h4>
          {/* <ul>
                        {pilgrimTrips.map(({ id, frontmatter, slug }) => (
                            <li key={id}>
                                <Link to={`/wycieczka/${slug}`}>{frontmatter.title}</Link>
                            </li>
                        ))}
                    </ul> */}
        </StyledPilgrimageSection>
        <StyledInsuranceSection>
          <h4>Ubezpieczenia</h4>
          {/* <ul>
                        {insuranceOffer.map(({ id, frontmatter, slug }) => (
                            <li key={id}>
                                <Link to={`/wycieczka/${slug}`}>{frontmatter.title}</Link>
                            </li>
                        ))}
                    </ul> */}
        </StyledInsuranceSection>

      </div>

    </Layout>)
}

export default IndexPage

export const query = graphql`
query AllPosts {
      WPContentSchool: allWpPost(filter: {categories: {nodes: {elemMatch: {name: {eq: "school"}}}}}) {
        edges {
          node {
            slug
            title
            content
            categories {
              nodes {
                name
              }
            }
          }
        }
      }
      WPContentBusiness:  allWpPost(filter: {categories: {nodes: {elemMatch: {name: {eq: "business"}}}}}) {
        edges {
          node {
            slug
            title
            content
            id
            categories {
              nodes {
                name
              }
            }
          }
        }
      }
      WPContentFeatured:  allWpPost(filter: {categories: {nodes: {elemMatch: {name: {eq: "featured"}}}}}) {
        edges {
          node {
            slug
            title
            content
            categories {
              nodes {
                name
              }
            }
          }
        }
      }
}
`;