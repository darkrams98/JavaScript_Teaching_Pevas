

//      create object to define controlle functions : 
var postController = {
    renderPost: function (data) {
        //      get parant Node :
        parent_container = document.getElementsByClassName("card_container")[0]
        //      create HTML element
        var postCard = document.createElement("div")
        //      add class name 
        postCard.classList.add("post_card")
        //      create html tag : 

        //      create Tags : 
        let tags = this.renderTags(data.courseTags)
        console.log(tags)
        //      create HTML content
        var card_container = `
                <div class="img_container">
                <img class="post_img" src="post_img_default.jpg" alt="">
            </div>
            <div class="content_container">
                <p class="p1">${data.postTitle}</p>
                <p class="p2">استاد : ${data.fullName}</p>
                <p class="p3">سطح : ${data.courseLevel}</p>
                <p class="p4">مدرک : ${data.degree}</p>


            </div>`;


        // Add innerHTML
        postCard.innerHTML = card_container;

        // Append the tags element to the content container
        var contentContainer = postCard.querySelector('.content_container');
        contentContainer.appendChild(tags);

        // Append the postCard to the parent_container
        parent_container.appendChild(postCard);
    },
    //      function to controlle tags :
    renderTags: function (tags) {
        var tagSection = document.createElement("div")
        tagSection.classList.add("tag_section")

        //      iterate on tags array to render and append tag elements :
        for (let i = 0; i < tags.length; i++) {
            var tagContainer = document.createElement("div");
            tagContainer.classList.add("tag_container");

            var tagElement = document.createElement("p");
            tagElement.classList.add("p5");
            tagElement.textContent = tags[i];
            //      append each tag to parent Node
            tagContainer.appendChild(tagElement);
            tagSection.appendChild(tagContainer);
        }
        //      return Node with all tags
        return tagSection
    }
}

export {postController}