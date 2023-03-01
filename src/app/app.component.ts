import { Component } from '@angular/core';

export class Tag {
  id!: number;
  name!: string;
  slug!: string;
  pivot?: any;
}

export class Category {
  id!: number;
  name!: string;
  slug!: string;
  pivot?: any;
}

export class projects {
  id!: number;
  title!: string;
  slug!: string;
  excerpt!: string;
  body!: string;
  url!: string | null; 
  'published_date'!: string | null;
  image!: string | null;
  thumb!: string | null;
  'category_id'!: number | null;
  'created_at'!: string;
  'updated_at'!: string;
  category!: Category | null;
  tags!: Tag[] | undefined;
}

const TAGS: Tag[] = [
  {"id":1,"name":"PHP","slug":"php"},
  {"id":2,"name":"Laravel","slug":"laravel"},
  {"id":3,"name":"Node.js","slug":"node-js"}
];

const CATEGORIES: Category[] = [
  {"id":1,"slug":"back-end","name":"Back End"},
  {"id":2,"slug":"front-end","name":"Front End"},
  {"id":3,"slug":"full-stack","name":"Full Stack"}
];

const PROJECTS: projects[] = [
  {
    "id": 1,
    "title": "Portfolio Showcase",
    "slug": "portfolio-showcase",
    "excerpt": "Reiciendis quia velit iste placeat itaque eaque. Illum ipsa harum praesentium illo consequatur harum.",
    "body": "<p>Ut fugiat et sint iusto repellat esse voluptas. Nam nulla mollitia temporibus laborum nostrum dolore. Harum a molestias quasi totam fuga.<\/p><p>Excepturi voluptate consectetur reprehenderit commodi sed. Dolor praesentium ut illo voluptatem ipsam id odit. Dolorem vitae sapiente similique unde voluptatum totam assumenda. Aut officia deserunt voluptatum et dicta.<\/p><p>Natus magnam modi qui corrupti. Delectus et quis doloribus molestiae. Sit repellat aliquam sequi consequatur praesentium et. Deserunt est rerum ad beatae veritatis corrupti.<\/p><p>Nihil ut non enim et qui. Fugit eos fugiat qui eius voluptatem iste esse doloribus. Vel tempora facilis occaecati.<\/p>",
    "url": null,
    "published_date": null,
    "image": "biscuit.jpg",
    "thumb": null,
    "category_id": 3,
    "created_at": "2023-02-27T22:50:15.000000Z",
    "updated_at": "2023-02-27T22:50:15.000000Z",
    "category": {
        "id": 3,
        "slug": "full-stack",
        "name": "Full Stack"
    },
    "tags": [
        {
            "id": 1,
            "name": "PHP",
            "slug": "php",
            "pivot": {
                "projects_id": 1,
                "tags_id": 1
            }
        },
        {
            "id": 2,
            "name": "Laravel",
            "slug": "laravel",
            "pivot": {
                "projects_id": 1,
                "tags_id": 2
            }
        },
        {
            "id": 3,
            "name": "Node.js",
            "slug": "node-js",
            "pivot": {
                "projects_id": 1,
                "tags_id": 3
            }
        }
    ]
},
{
    "id": 2,
    "title": "SSD Yearbook",
    "slug": "ssd-yearbook",
    "excerpt": "Natus quis quas enim hic beatae. Sed non quis sit.",
    "body": "<p>Ea est aut repellat praesentium est quis. Quaerat omnis odit optio qui ut.<\/p><p>Est deserunt velit omnis non corporis molestias aspernatur. Dolor pariatur modi quaerat doloremque sint voluptatem corrupti. Possimus consequatur autem distinctio voluptas optio excepturi recusandae.<\/p><p>Corrupti est adipisci sit. Eum est et totam. Est neque doloremque et quas. Quaerat autem maxime aliquid quasi.<\/p>",
    "url": null,
    "published_date": null,
    "image": "biscuit.jpg",
    "thumb": null,
    "category_id": 1,
    "created_at": "2023-02-27T22:50:15.000000Z",
    "updated_at": "2023-02-27T22:50:15.000000Z",
    "category": {
        "id": 1,
        "slug": "back-end",
        "name": "Back End"
    },
    "tags": []
},
{
    "id": 3,
    "title": "Movie Mania",
    "slug": "movie-mania",
    "excerpt": "Quo eum ipsam omnis ut. Omnis perspiciatis fugiat incidunt blanditiis.",
    "body": "<p>Id consectetur non perferendis eligendi officia at. Modi illo atque sapiente quis similique earum aut. Dignissimos deleniti qui dolores autem ut distinctio. Dicta velit possimus et ullam inventore.<\/p><p>Eveniet facere amet similique. Neque corrupti quasi laborum quaerat. Voluptatem accusamus aliquid fugiat id. A veritatis excepturi quibusdam esse molestias recusandae.<\/p><p>Eaque doloremque dolor itaque. Fugit et aperiam aut veritatis atque sint aut. Excepturi facere temporibus eligendi totam.<\/p><p>Tempora eum nesciunt voluptatem vel sint. Eligendi ipsa occaecati ipsam necessitatibus omnis vero. Adipisci autem voluptatibus at.<\/p><p>Amet architecto molestias occaecati pariatur eum eaque ea. Et iure iste corporis possimus ex. Sit provident explicabo qui qui pariatur quis. Ex iste quod sequi voluptatibus culpa.<\/p>",
    "url": null,
    "published_date": null,
    "image": "biscuit.jpg",
    "thumb": null,
    "category_id": null,
    "created_at": "2023-02-27T22:50:15.000000Z",
    "updated_at": "2023-02-27T22:50:15.000000Z",
    "category": null,
    "tags": []
},
{
    "id": 4,
    "title": "News Site Homepage",
    "slug": "news-site-homepage",
    "excerpt": "Adipisci tenetur dolorem consequatur ad tenetur qui sint. Veniam aut exercitationem consequatur beatae qui.",
    "body": "<p>Dolor molestias totam voluptas quos consequatur. Sint perferendis cupiditate adipisci quidem asperiores voluptatem. Earum voluptatem repellat iusto quos.<\/p><p>Odio eaque dolor suscipit aut itaque. Modi voluptates quia repellendus eos.<\/p><p>Ut iste cumque consequatur quisquam eveniet vel aut aut. Ea consequatur quam explicabo odio dicta amet. Ipsa vel nulla amet doloremque repellendus consequatur sit omnis.<\/p>",
    "url": null,
    "published_date": null,
    "image": "biscuit.jpg",
    "thumb": null,
    "category_id": 2,
    "created_at": "2023-02-27T22:50:15.000000Z",
    "updated_at": "2023-02-27T22:50:15.000000Z",
    "category": {
        "id": 2,
        "slug": "front-end",
        "name": "Front End"
    },
    "tags": []
},
{
    "id": 5,
    "title": "JavaScript Game",
    "slug": "javascript-game",
    "excerpt": "Dolores doloribus laudantium et error a sapiente aut. Dolor ut sunt quisquam.",
    "body": "<p>Quidem quia et voluptatibus omnis rerum qui. Est et minus esse at. Nihil cupiditate ea consequatur voluptas laboriosam neque. Beatae odio delectus commodi est.<\/p><p>Expedita inventore neque praesentium velit. Quia aut rem non sunt. Sint labore ut impedit ut molestias tenetur. Modi fugit voluptatem explicabo voluptatem fuga quia dicta.<\/p><p>Voluptas et neque necessitatibus incidunt. Ea cum assumenda quam possimus et eveniet. Id perferendis ea fuga ipsam architecto natus at.<\/p>",
    "url": null,
    "published_date": null,
    "image": "biscuit.jpg",
    "thumb": null,
    "category_id": 2,
    "created_at": "2023-02-27T22:50:15.000000Z",
    "updated_at": "2023-02-27T22:50:15.000000Z",
    "category": {
        "id": 2,
        "slug": "front-end",
        "name": "Front End"
    },
    "tags": []
},
{
    "id": 6,
    "title": "iOS App",
    "slug": "ios-app",
    "excerpt": "Perferendis aperiam excepturi minus deserunt qui. Cum id aut sint hic quia.",
    "body": "<p>Quibusdam consectetur sit sed accusantium totam. Officiis voluptates assumenda incidunt molestiae laboriosam in sit.<\/p><p>Magnam fugiat voluptate fugiat consequuntur. Et totam sed temporibus. Eligendi voluptatem sapiente tempora quasi.<\/p><p>Et aut non quod perferendis error recusandae. Cum quas velit rerum vel ea sit numquam et. Quam quia sit esse repellendus beatae est deserunt. Quia rem cumque quod doloribus quo delectus.<\/p>",
    "url": null,
    "published_date": null,
    "image": "biscuit.jpg",
    "thumb": null,
    "category_id": null,
    "created_at": "2023-02-27T22:50:15.000000Z",
    "updated_at": "2023-02-27T22:50:15.000000Z",
    "category": null,
    "tags": []
},
{
    "id": 7,
    "title": "Android App",
    "slug": "android-app",
    "excerpt": "Voluptatem omnis ut non harum. At sed iure saepe inventore.",
    "body": "<p>Porro repellat sint dolor animi vitae beatae voluptatem provident. At corrupti nesciunt dolore cum nobis eligendi. Ut qui quas aperiam explicabo dolorem aut molestiae ratione. Aliquid alias facilis inventore omnis.<\/p><p>Voluptatem doloribus et voluptas perferendis est assumenda sit. Ut est impedit ratione eos nihil blanditiis. Nulla inventore modi voluptas perspiciatis commodi consequuntur. Illum enim ad est et a.<\/p><p>Ea voluptatem est nobis et quasi quaerat. Nobis ea incidunt voluptatem consequuntur dolor atque consectetur. Aut qui labore quisquam praesentium in.<\/p>",
    "url": null,
    "published_date": null,
    "image": "biscuit.jpg",
    "thumb": null,
    "category_id": null,
    "created_at": "2023-02-27T22:50:15.000000Z",
    "updated_at": "2023-02-27T22:50:15.000000Z",
    "category": null,
    "tags": []
},
{
    "id": 8,
    "title": "Industry Project",
    "slug": "industry-project",
    "excerpt": "Rerum eum aut rem exercitationem in. Autem laudantium natus sint ut dignissimos ut.",
    "body": "<p>Voluptas aut qui eos repellat dolorem. Totam repudiandae temporibus nam odio voluptate nihil similique id. Esse dignissimos ullam quod rerum excepturi nam. Quo tempore omnis in temporibus.<\/p><p>Est officiis occaecati praesentium qui qui adipisci aperiam dolores. Ipsam quia dolorem omnis delectus. Est et dolore iste fuga facilis assumenda sequi. Nobis qui consequuntur ea id ab cumque.<\/p><p>Omnis quos optio et et. Occaecati alias ut maiores perferendis accusantium facilis quia. Rerum temporibus rerum reiciendis ut maxime saepe aut. Illo in quod doloribus nam aut.<\/p><p>Consequuntur quo eos aperiam rerum quidem et porro. Maiores illo iste ea ut. Explicabo aliquam velit repudiandae quo nam.<\/p><p>Incidunt cupiditate ea cumque tempore hic. Veritatis earum qui voluptatem distinctio quia dicta accusantium. Maiores quod repudiandae est corrupti. Rerum ea veritatis quisquam optio sint libero fugit.<\/p><p>Libero ut libero est maiores et illo quia. Odit repellendus non amet eum fugiat placeat placeat. Ratione quia quia reprehenderit beatae reprehenderit necessitatibus et. Est voluptatum occaecati reiciendis qui nobis eos.<\/p>",
    "url": null,
    "published_date": null,
    "image": "biscuit.jpg",
    "thumb": null,
    "category_id": 3,
    "created_at": "2023-02-27T22:50:15.000000Z",
    "updated_at": "2023-02-27T22:50:15.000000Z",
    "category": {
        "id": 3,
        "slug": "full-stack",
        "name": "Full Stack"
    },
    "tags": []
}

];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.projectCard.scss']
})
export class AppComponent {
  title = 'frontend';
  name = 'Mike';
  year = new Date().getFullYear();

  selectedCategory: Category | null | undefined;
  public categories = CATEGORIES;
  public projects = PROJECTS;
  public tags = TAGS;

  handleCategorySelected(category: Category) {
    this.selectedCategory = category;
  }
}
