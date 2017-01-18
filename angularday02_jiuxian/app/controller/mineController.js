
angular.module("wineApp")
    .controller("mineHeadController",
        function($scope){
            $scope.title="个人中心";

        })
  .controller("mineBodyController",
    function($scope){
        $scope.forumOne=[
            {title:"全部订单",img:"mine-contentFrame-order-1.png"},
            {title:"购物车",img:"mine-contentFrame-order-2.png"},
            {title:"我的收藏",img:"mine-contentFrame-order-3.png"},
        ]
        $scope.forumTwo=[
            {title:"我的优惠券",img:"mine-contentFrame-order-4.png"},
            {title:"浏览历史",img:"mine-contentFrame-order-5.png"},
            {title:"我的钱包",img:"mine-contentFrame-order-6.png"},
        ]
        $scope.forumThree=[
            {title:"商品兑换",img:"mine-contentFrame-order-7.png"},
            {title:"地址管理",img:"mine-contentFrame-order-8.png"},
            {title:"账户安全",img:"mine-contentFrame-order-9.png"},
        ]
    }
)

