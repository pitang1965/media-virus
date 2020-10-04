import React from "react"
import { graphql } from "gatsby"
import { Cards, Hero, SiteMetadata } from "../components"
import { Layout } from "../layouts/Layout"

export default ({ data }) => {
  return (
    <Layout>
      <SiteMetadata
        title="メディアウイルス"
        description="日本のメディアが適正な報道（新型コロナ等）をしているかの調査結果です。"
        image={data.hero.url}
      />

      <Hero
        image={data.hero}
        tag="#improveAccountability"
        title="メディアウイルス"
        description="日本のメディアが適正な報道（新型コロナ等）をしているかの調査結果です"
      />

      <Cards nodes={data.items.nodes} />
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery($tableName: String!) {
    hero: file(relativePath: { eq: "hero-travel.jpg" }) {
      ...HeroImageFragment
    }
    items: allAirtable(filter: { table: { eq: $tableName } }) {
      nodes {
        data {
          prefecture
          image {
            ...CardImageFragment
          }
          name
          slug
          summary
          updated
        }
      }
    }
  }
`
