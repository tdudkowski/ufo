const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    const postWPTemplate = path.resolve("./src/templates/tripWPPostTemplate.js");

    return graphql(`	{
         WPposts: allWpPost{
                            nodes {
                  slug
                  title
                  content
                  id
                }
              }
                         
    }
  `).then((result) => {
        if (result.errors) {
            throw result.errors;
        }

        const WPposts = result.data.WPposts.nodes;

        WPposts.forEach(post => {
            createPage({
                path: "/wycieczka/" + post.slug,
                component: postWPTemplate,
                ...post,
                context: {
                    ...post.context,
                    slug: post.slug,
                },
            });
        });

    })
};