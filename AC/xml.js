const xml = `<bookstore>
   <book category="cooking">
       <title lang="en">Everyday Italian</title>
       <author>Giada De Laurentiis</author>
       <year>2005</year>
       <price>30.00</price> </book>
   <book category="children">
       <title lang="en">Harry Potter</title>
       <author>J K. Rowling</author>
       <year>2005</year>
       <price>29.99</price> </book>
   <book category="web">
       <title lang="en">XQuery Kick Start</title>
       <author>James McGovern</author>
       <author>Per Bothner</author>
       <author>Kurt Cagle</author>
       <author>James Linn</author>
       <author>Vaidyanathan Nagarajan</author>
       <year>2003</year>
       <price>49.99</price> </book>
   <book category="web" cover="paperback">
       <title lang="en">Learning XML</title>
       <author>Erik T. Ray</author>
       <year>2003</year>
       <price>39.95</price> </book>
</bookstore>`


function setup() {

   function makeBookInfoNode(nodeName, nodeData) {
      const ret  = document.createElement(nodeName)
      const text = document.createTextNode(nodeData)
      ret.appendChild(text)

      return ret
   }

   function appendChildren(node, nodeList) {
      for (let toAdd of nodeList) {
         node.appendChild(toAdd)
      }
   }

   function makeBookNode() {
      const node = document.createElement('book')
      const children = []

      for (arg of arguments) {
         for (let key in arg) {
            children.push(makeBookInfoNode(key, arg[key]))
         }
      }

      appendChildren(node, children)

      return node
   }

   function bookParser(bookNode) {
      const book = {
         authors: [],
         year: 0,
         title: "",
         price: 0
      }

      for (let meta of bookNode.children) {
         //console.log(meta.attributes[0].nodeName)
         if (meta.tagName == 'author')
            book.authors.push(meta.childNodes[0].data)
         else
            if (meta.tagName == 'title')
               book[meta.tagName] = meta.childNodes[0].data
            else {
               book[meta.tagName] = Number(meta.childNodes[0].data)
            }
      }
      return book
   }

   const d = new DOMParser().parseFromString(xml, 'application/xml')
   const books = d.getElementsByTagName('book')
   const bookArray = []

   const bookstore = d.childNodes[0]
   bookstore.appendChild(
      makeBookNode({ author: 'John Smith'}, { year: 2016 }, { title: "End Days"}, { price: 15.00}))

   for (let book of books) {
      bookArray.push(bookParser(book))
   }

   document.body.innerHTML = JSON.stringify(bookArray, null, 2)
   b = d//console.log()
}



document.addEventListener('DOMContentLoaded', setup)
