import React from "react";
import { graphql } from "gatsby";
import LayoutBlog from "../components/layout";
import styled from "styled-components";
import parse from 'html-react-parser';
import checked from "../images/checked.png"

const StyledH2 = styled.h2`
text-align:center;
color:#332;
font-size:2.5rem;
`;

const StyledArticle = styled.article`
max-width:950px;
margin:.5rem;
padding:.5rem;
margin-left: auto;
background-color: rgba(250,250,250,.8);
& h3 {color:#443; font-size:1.7rem; padding-left:1rem; border-bottom:1px solid #aa9;}
& ul {list-style-type: circle; margin:1rem;}
& table {margin:1rem; border-collapse: collapse;}
& td {border:1px solid #aa9; padding:.5rem;}
& figure.wp-caption {max-width:90%; margin-inline-start:.2rem; padding:0; box-shadow: 2px 2px 5px rgba(51,51,51,.4)}
& figcaption.wp-caption-text {background-color: rgba(51,51,51,.05); padding:.5rem;}

& ul.wielkopolska1 {list-style-image: url(${checked})}

& ul.wielkopolska2 {list-style-image: url(${checked}); display:flex; flex-wrap:wrap; }
& ul.wielkopolska2 li { margin:.2rem 1.3rem; }

& ul.wielkopolska3 {list-style-type:none; display:flex; flex-wrap:wrap; margin-left:0;  padding-left:.5rem;}
& ul.wielkopolska3 li { margin: .2rem .5rem; border:1px solid #ffe; border-radius:25px; padding:.2rem .5rem; box-shadow: 3px 3px 6px #ccb; color:#443; background-color: #ffe;}

& ul.krakow {list-style-type: square; }
& ul.krakow li {background-color: rgba(250,250,250,.4); box-shadow: 4px 4px 8px #ccb; margin: .5rem; padding:.4rem; border:1px solid #dd7; }

& ul.krakowjura {list-style-image: url(${checked}); display:flex; flex-direction:column; background-color: rgba(250, 250, 250,.3); border:1px solid #ddd; box-shadow: 3px 3px 10px #ddc;}
& ul.krakowjura li {padding:.2rem .5rem; margin: .2rem 1rem;}

& ul.jura {list-style-type:none; display:flex; flex-wrap: wrap;}
& ul.jura li { position:relative; border:1px solid rgba(51,51,51,.2); padding:5px 10px; border-radius:20px; margin:.5rem; padding-left: 40px;}
& ul.jura li:before {position:absolute; left:10px;  display:block; content: url(${checked});}

& ul.sztolnia {list-style-type: square; display:flex; flex-direction:column; background-color: rgba(250, 250, 250,.3); border:6px dashed #ddc; border-radius: 2px; }
& ul.sztolnia li {margin: .2rem; margin-left: 1rem;}

& ul.szwajcaria {list-style-image: url(${checked}); display:flex; flex-wrap:wrap; background-color: rgba(250, 250, 250,.3); border:1px solid #ddd; box-shadow: 3px 3px 10px #ddc; border-radius: 10px;}
& ul.szwajcaria li {padding:.2rem; margin: .2rem .9rem;}

& ul.glatz {list-style-image: url(${checked}); display:flex; flex-wrap: wrap;  background-color: rgba(250, 250, 250,.8);  }
& ul.glatz li {margin: .2rem 1rem;}

& table {width:auto !important; margin:1rem;}
& table thead {background-color: rgba(51,51,51,.05); text-align:center; font-weight:bold;}

@media (min-width:700px) {
    & figure.wp-caption {display: inline-block; margin-inline-start:1rem; }
    /* & figure.wp-caption {display:table-cell; border: 1rem solid transparent; } */
   
}
`;

const blogPage = ({ data }) => {
    const { title, content } = data.wpPost;
    return (
        <LayoutBlog>

            <StyledH2>{title}</StyledH2>
            <StyledArticle>
                {parse(content)}
            </StyledArticle>
        </LayoutBlog>
    );
};
export default blogPage
export const query = graphql`
  query WPBlogPageBySlug($slug: String!) {
   wpPost( slug: { eq: $slug } ) {
    slug
    title
    content
    id
     
    }
  }
`;