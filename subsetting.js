function subsetting(data)  {
 
// FILTER LINKS //
  const candidates = data.links //.slice(0,10000)
    .filter(d1 => d1.label === "worksOn")
    .filter(d2 => d2.score > 0.85);

// FILTER NODES FROM FILTERED LINKS //
  let filteredNodes = Object.values(
     candidates.reduce(function(t, v) {
        if (!t[v.source]) {
          t[v.source] = data.nodes.filter(o => o.id === v.source)[0];
        }
        if (!t[v.target]) {
          t[v.target] = data.nodes.filter(o => o.id === v.target)[0];
        }
        return t;
      }, {})
    );
    // console.log(filteredNodes);
  
    
    return { nodes: filteredNodes, links: candidates };
  }

  //  const links = indexAll.map(i => data.links[i]);
  
  //  console.log(relationships);

  //   let rels = [];
  //   ids.forEach((id, i) => {
  //     let idOthers = ids.filter(i => i !== id);

  //     let tempRels = relationships.filter(
  //       r =>
  //         (r.source === id && idOthers.includes(r.target)) ||
  //         (r.target === id && idOthers.includes(r.source))
  //     );
  //     //console.log(tempRels.map(l => l.index));
  //     rels = rels.concat(tempRels);
  //   });
  //   const indexAll = rels
  //     .map(l => l.index)
  //     .filter((v, i, a) => a.indexOf(v) === i);
  //   //  console.log(indexAll.length, indexAll);

  //sandbox: find interesting nodes
  // console.log(
  //   candidates.map(c => {
  //     const d = c;
  //     return [d.source_label, d.target_label];
  //   })
  // );

  // const relTypes = data.links //.slice(0, 10)
  //   .map(d1 => d1.label) //{lable: d1.r.label/*, hasProperites: d1.r.properties*/})
  //   .filter((d2, i, a) => a.indexOf(d2) === i);
  //  console.log(relTypes);
  /*
["preferredMappedTo", //topics
 "isRelatedTo", //tweet, pub -> topic
 "worksOn", //author, twitterAcc, org -> topic, score
 "hasSuggestedTopic", //topics
 "replies", 
 "retweets", 
 "tweets", 
 "mentions", 
 "quotes", 
 "cites", 
 "isAuthor", 
 "isSponsor", 
 "hasPublication", 
 "hasRelatedOrganization", //orgs
 "hasProduct", 
 "pharmacologicalAction"]
 */

  /*
- split into 3 categoreis
- worksOn
- only 1 connection
*/
