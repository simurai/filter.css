
// Filtering filters - Demo app ---------------------------
// More info: http://simurai.com/blog/2014/07/20/filtering-filters/

var el_app = document.getElementById('app');
var currentFilter;

FastClick.attach(document.body);


// Vue ---------------------------

var app = new Vue({
    el: '#app',
    data: {
        filters: [
            { filter: 'Default',        label: 'None'       },
            { filter: 'Eureka',         label: 'Eureka'     },
            { filter: 'London',         label: 'London'     },
            { filter: 'FlipFlop',       label: 'FlipFlop'   },
            { filter: 'Copper',         label: 'Copper'     },
            { filter: 'LoFi',           label: 'LoFi'       },
            { filter: 'Night',          label: 'Night'      },
            { filter: 'Rocky',          label: 'Rocky'      },
            { filter: 'Karl',           label: 'Karl'       },
            { filter: 'Gold',           label: 'Gold'       },
            { filter: 'Silver',         label: 'Silver'     },
            { filter: 'Butterfly',      label: 'Butterfly'  },
            { filter: 'Introvert',      label: 'Introvert'  }
        ],
        photos: [
            { src: 'photo-1.jpg' },
            { src: 'photo-2.jpg' },
            { src: 'photo-3.jpg' }
        ]
    },
        
    methods: {
        
        setFilter: function (filter) {
            
            var el_photos = document.querySelectorAll('.Gallery-item');
            for (var i = 0; i < el_photos.length; i++) {
                el_photos[i].setAttribute('data-filter', filter );
            }
            
        },

        onFilter: function (el_filter, index) {
            if(currentFilter) {
                currentFilter.$el.classList.remove('is-selected');
            }
            
            this.setFilter(app.filters[index].filter);
            el_filter.$el.classList.add('is-selected');
            
            currentFilter = el_filter;
        },
        
        onPhoto: function (el_photo, index) {
            el_app.setAttribute('data-photo', index + 1 );
        }
                
    }
});
