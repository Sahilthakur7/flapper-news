
angular.module('flapperNews')
.factory('posts', [function()
        {
            var o= {
                posts: [{title: 'post 1',upvotes: 5},
 
{title: 'post 2',upvotes: 7,comments: []},

{title: 'go',upvotes: 5,comments: []},

{title: 'post 4',upvotes: 3, comments: [ {author: 'raju', body: 'hello', upvotes: 3} ]},

{title: 'post 5',upvotes: 4, comments: [ {author: 'raj', body: 'hom', upvotes: 4} ]}]
            };
            return o;
        }]);
