'use strict';

angular.module('Collade').
    controller('MainCtrl', ['$scope', function ($scope) {
        $scope.data = {
            "showLeft": false,
            "showRight": false,
            "categories": [
                {
                    "name": "Collade",
                    "collapse": false,
                    "children": [
                        {
                            "name": "#Design",
                            "count": "1/4",
                            "collapse": false,
                            "children": [
                                {
                                    "name": "#Logo Design"
                                },
                                {
                                    "name": "#Landing Page Design"
                                },
                                {
                                    "name": "#App Design"
                                },
                                {
                                    "name": "#Presentation Design"
                                }
                            ]
                        },
                        {
                            "name": "#Development",
                            "count": "5/18",
                            "collapse": true,
                            "children": [
                                {
                                    "name": "#Logo Design"
                                },
                                {
                                    "name": "#Landing Page Design"
                                },
                                {
                                    "name": "#App Design"
                                },
                                {
                                    "name": "#Presentation Design"
                                }
                            ]
                        },
                        {
                            "name": "#Marketing",
                            "count": "9813",
                            "collapse": true,
                            "children": [
                                {
                                    "name": "#Logo Design"
                                },
                                {
                                    "name": "#Landing Page Design"
                                },
                                {
                                    "name": "#App Design"
                                },
                                {
                                    "name": "#Presentation Design"
                                }
                            ]
                        },
                        {
                            "name": "#Finance",
                            "count": "2/5",
                            "collapse": true,
                            "children": [
                                {
                                    "name": "#Logo Design"
                                },
                                {
                                    "name": "#Landing Page Design"
                                },
                                {
                                    "name": "#App Design"
                                },
                                {
                                    "name": "#Presentation Design"
                                }
                            ]
                        }

                    ]

                }
            ]
        };

        $scope.toggleLeft = function () {
            $scope.data.showLeft = !$scope.data.showLeft;
        };

        $scope.toggleRight = function () {
            $scope.data.showRight = !$scope.data.showRight;
        };
    }]);