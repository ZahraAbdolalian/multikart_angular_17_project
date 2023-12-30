import { Component } from '@angular/core';

import { UserCartService } from '../../service/user-cart.service';
import { SharedImports } from '../../shared/shared-imports/shared.module';


@Component({
  selector: 'app-bottom-header',
  standalone: true,
  imports: [
    SharedImports
  ],
  templateUrl: './bottom-header.component.html',
  styleUrl: './bottom-header.component.scss'
})
export class BottomHeaderComponent {
  showFiller = false;

  home = [
    {
      name: 'electronics',
      link: 'electronics',
    },
    {
      name: 'jewelery',
      link: 'jewelery',
    },
    {
      name: "men's clothing",
      link: "men's clothing",
    },
    {
      name: "women's clothing",
      link: "women's clothing",
    }
  ];

  shop = [
    {
      name: 'Left Sidebar',
      link: '#',
    },
    {
      name: 'Right Sidebar',
      link: '#',
    },
    {
      name: 'No Sidebar',
      link: '#',
    },
    {
      name: 'Infinite Scroll',
      link: '#',
    },
  ];

  products = [
    {
      name: 'Sidebar',
      link: '#',
    },
    {
      name: 'Three Olumn',
      link: '#',
    },
    {
      name: 'our Image',
      link: '#',
    },
    {
      name: 'Bundle Product',
      link: '#',
    },
    {
      name: 'Image Outside',
      link: '#',
    },
  ]

  features = [
    {
      name: 'portfolio',
      options: [
        {
          title: 'portfolio grid 2',
          link: '#'
        },
        {
          title: 'portfolio grid 3',
          link: '#'
        },
        {
          title: 'portfolio grid 4',
          link: '#'
        },
        {
          title: 'masonry-grid-2',
          link: '#'
        },
        {
          title: 'masonry-grid-3',
          link: '#'
        },
        {
          title: 'masonry-grid-4',
          link: '#'
        },
        {
          title: 'masonry-Full-Width',
          link: '#'
        }
      ]
    },
    {
      name: 'add to cart',
      options: [
        {
          title: 'Cart Right',
          link: '#'
        },
        {
          title: 'Cart Left',
          link: '#'
        },
        {
          title: 'Cart Top',
          link: '#'
        },
        {
          title: 'Cart Bottom',
          link: '#'
        },
        {
          title: 'Cart-Model-Popup',
          link: '#'
        }
      ]
    },
    {
      name: 'Theme Elements',
      options: [
        {
          title: 'Title',
          link: '#'
        },
        {
          title: 'Collection Banner',
          link: '#'
        },
        {
          title: 'Home Slider',
          link: '#'
        },
        {
          title: 'Category',
          link: '#'
        },
        {
          title: 'Services',
          link: '#'
        }
      ]
    },
    {
      name: 'Product Elements',
      options: [
        {
          title: 'Product Slider',
          link: '#'
        },
        {
          title: 'Banners',
          link: '#'
        },
        {
          title: 'Product Tabs',
          link: '#'
        },
        {
          title: 'Multi Slider',
          link: '#'
        }
      ]
    },
    {
      name: 'Email Template',
      options: [
        {
          title: 'Order Success',
          link: '#'
        },
        {
          title: 'Order Success 2',
          link: '#'
        },
        {
          title: 'Email Template',
          link: '#'
        },
        {
          title: 'Email Template 2',
          link: '#'
        }
      ]
    },

  ]

  pages = [
    {
      name: 'Home',
      link: '#',
    }, {
      name: 'About us',
      link: '#',
    }, {
      name: 'Search',
      link: '#',
    }, {
      name: 'Typography',
      link: '#',
    }, {
      name: 'Review',
      link: '#',
    }, {
      name: 'Order Success',
      link: '#',
    }, {
      name: 'Compare',
      link: '#',
    }, {
      name: 'Collection',
      link: '#',
    }, {
      name: 'Lookbook',
      link: '#',
    }, {
      name: '404',
      link: '#',
    }, {
      name: 'Coming Soon',
      link: '#',
    }, {
      name: 'Faq',
      link: '#',
    },
  ]

  blogs = [
    {
      name: 'Left Sidebar',
      link: '#',
    },
    {
      name: 'Right Sidebar',
      link: '#',
    },
    {
      name: 'No Sidebar',
      link: '#',
    },
    {
      name: 'Blog Details',
      link: '#',
    },
  ]

  headerItems = [
    { name: 'home', list: this.home },
    { name: 'shop', list: this.shop },
    { name: 'products', list: this.products },
    { name: 'features' },
    { name: 'pages', list: this.pages },
    { name: 'blogs', list: this.blogs }
  ]

  settingItems = [
    {
      language: ['English', 'French'],
      currency: ['Euro', 'Rupees', 'Pound', 'Dollar']
    }
  ]

  constructor(private userCart: UserCartService) { }

  get shoppingCartSize() {
    return this.userCart.cartProducts.length;
  }

  get cartProduct() {
    return this.userCart.cartProducts;
  }
}
