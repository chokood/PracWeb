// Real Data (실제로 사용되는 데이터 구성)
// 사람-성별
sex_human_data = {
        categories: ['성별'],
        series: [
        {
            name: '남자',
            data: 2920,
        },
        {
            name: '여성',
            data: 2000,
        }
        ]
    }

// 사람-악세사리
etc_human_data = {
    categories: ['남자', '여자'],
    series: {
        column : [
        {
            name: '모자 착용',
            data: [5000, 3000],
        },

        ],
        
        line : [
        {
            name: '가방 착용',
            data: [8000, 4000],           
        },                
        ],         
    },
    }

// 사람-의류선호도
cloth_human_data = [
    {
        clothSize: '상의 길이',
        man: '반팔 우위 (63%)',
        woman: '긴팔 우위 (65%)',        
    },
    {
        clothSize: '상의 색 비중',
        man: '',
        woman: '',        
    },
    {
        clothSize: '하의 길이',
        man: '긴바지 우위 (78%)',
        woman: '긴바지 우위 (78%)',        
    },
    {
        clothSize: '하의 색 비중',
        man: '',
        woman: '',        
    },
]

// 얼굴-성별
sex_face_data = {
    categories: ['성별'],
    series: [
        {
            name: '남자',
            data: 5768,
        },
        {
            name: '여성',
            data: 2920,
        }
    ]
}

// 얼굴-악세사리
etc_face_data = {
    categories: ['모자착용', '안경착용', '마스크착용'],
    series: {
        column : [
        {
            name: '남성',
            data: [5000, 3000, 6000],
        },
        ],        
        line : [
        {
            name: '여성',
            data: [4000, 2500, 5500],           
        },                
        ],         
    },
    }

// 얼굴-연령분포
age_face_data = {
    categories: [
    '미성년',
    '청년',
    '중.장년',
    '노년',        
    ],
    series: {
    area: [
        {
        name: '여성',
        data: [5000, 3000, 3200, 4000],
        },                
    ],
    line: [
        {
        name: '남성',
        data: [8000, 4000, 1000, 500],
        },        
    ],
    },      
};

// 차량 종류별 검지 - 자동차, 버스, 트럭
car_pie_data = 
{
    categories: ['차량'],
    series: [
    {
        name: '자동차',
        data: 3062,
    },
    {
        name: '버스',
        data: 2708,
    },
    {
        name: '트럭',
        data: 236,
    }    
    ]
}

// 차량 종류별 검지 - 오토바이, 자전거
cycle_pie_data = 
{
    categories: ['이륜'],
    series: [
        {
            name: '오토바이',
            data: 1400,
        },
        {
            name: '자전거',
            data: 1600,
        }      
    ]
}

// 차량 번호 인식 유형별 통계
vehicle_line_area_data = {
    categories: ['자동차', '버스', '트럭', '오토바이'],
    series: {
        column : [
        {
            name: 'VIP',
            data: [5000, 3000, 6000, 3200],
        },
        ],        
        line : [
        {
            name: '주차료 체납',
            data: [4000, 2500, 5500, 2200],           
        },                
        {
            name: '주의차량',
            data: [2000, 1500, 5500, 1200],           
        },                
        ],         
    },
    }

// 침입-성별
sex_invade_data = {
    categories: ['성별'],
    series: [
    {
        name: '남자',
        data: 80,
    },
    {
        name: '여성',
        data: 20,
    }
    ]
}

// 침입자 선호 악세서리
etc_invade_data = {
    categories: ['모자착용', '안경착용', '마스크착용'],
    series: {
        column : [
        {
            name: '남자',
            data: [5000, 3000, 7000],
        },

        ],
        
        line : [
        {
            name: '여자',
            data: [8000, 4000, 9000],           
        },                
        ],         
    },
    }

// 침입자 의류 및 선호 색상군.
cloth_invade_data = [
    {
        clothSize: '상의 길이',
        man: '반팔 우위 (63%)',
        woman: '긴팔 우위 (65%)',        
    },
    {
        clothSize: '상의 색 비중',
        man: '',
        woman: '',        
    },
    {
        clothSize: '하의 길이',
        man: '긴바지 우위 (78%)',
        woman: '긴바지 우위 (78%)',        
    },
    {
        clothSize: '하의 색 비중',
        man: '',
        woman: '',        
    },
]

heatmap_group_in_data = {
    categories: {
    x: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
    y: ['1층 서관(좌)', '1층 동관(좌)', '1층 플랫폼', '1층 서관(우)', '1층 동관(우)'],
    },
    series: [
    [-3.5, -1.1, 4.0, 11.3, 17.5, 21.5, 24.9, 25.2, 20.4, 13.9, 6.6, -0.6,-3.5, -1.1, 4.0, 11.3, 17.5, 21.5, 24.9, 25.2, 20.4, 13.9, 6.6, -0.6],
    [3.8, 5.6, 7.0, 9.1, 12.4, 15.3, 17.5, 17.8, 15.0, 10.6, 6.4, 3.7,3.8, 5.6, 7.0, 9.1, 12.4, 15.3, 17.5, 17.8, 15.0, 10.6, 6.4, 3.7],
    [22.1, 22.0, 20.9, 18.3, 15.2, 12.8, 11.8, 13.0, 15.2, 17.6, 19.4, 21.2,-10.3, -9.1, -4.1, 4.4, 25.2, 16.3, 18.5, 16.7, 10.9, 4.2, -2.0, -7.5],
    [-10.3, -9.1, -4.1, 4.4, 12.2, 16.3, 18.5, 16.7, 10.9, 4.2, -2.0, -7.5,-10.3, -9.1, -4.1, 4.4, 12.2, 16.3, 18.5, 16.7, 10.9, 4.2, -2.0, -7.5],
    [-13.2, -13.7, -13.1, -10.3, -6.1, -3.2, 0.0, -0.1, -1.8, -4.5, -9.0, -10.9,3.8, 5.6, 7.0, 9.1, 12.4, 15.3, 17.5, 17.8, 15.0, 10.6, 6.4, 3.7],          
    ],
}

heatmap_group_out_data = {
    categories: {
    x: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
    y: ['1층 서관(좌)', '1층 동관(좌)', '1층 플랫폼', '1층 서관(우)', '1층 동관(우)'],
    },
    series: [
    [-3.5, -1.1, 4.0, 11.3, 17.5, 21.5, 24.9, 25.2, 20.4, 13.9, 6.6, -0.6,-3.5, -1.1, 4.0, 11.3, 17.5, 21.5, 24.9, 25.2, 20.4, 13.9, 6.6, -0.6],
    [3.8, 5.6, 7.0, 9.1, 12.4, 15.3, 17.5, 17.8, 15.0, 10.6, 6.4, 3.7,3.8, 5.6, 7.0, 9.1, 12.4, 15.3, 17.5, 17.8, 15.0, 10.6, 6.4, 3.7],
    [22.1, 22.0, 20.9, 18.3, 15.2, 12.8, 11.8, 13.0, 15.2, 17.6, 19.4, 21.2,-10.3, -9.1, -4.1, 4.4, 25.2, 16.3, 18.5, 16.7, 10.9, 4.2, -2.0, -7.5],
    [-10.3, -9.1, -4.1, 4.4, 12.2, 16.3, 18.5, 16.7, 10.9, 4.2, -2.0, -7.5,-10.3, -9.1, -4.1, 4.4, 12.2, 16.3, 18.5, 16.7, 10.9, 4.2, -2.0, -7.5],
    [-13.2, -13.7, -13.1, -10.3, -6.1, -3.2, 0.0, -0.1, -1.8, -4.5, -9.0, -10.9,3.8, 5.6, 7.0, 9.1, 12.4, 15.3, 17.5, 17.8, 15.0, 10.6, 6.4, 3.7],          
    ],
}


// 침입-성별
sex_loitering_data = {
    categories: ['성별'],
    series: [
    {
        name: '남자',
        data: 80,
    },
    {
        name: '여성',
        data: 20,
    }
    ]
}

// 침입자 선호 악세서리
etc_loitering_data = {
    categories: ['모자착용', '안경착용', '마스크착용'],
    series: {
        column : [
        {
            name: '남자',
            data: [5000, 3000, 7000],
        },

        ],
        
        line : [
        {
            name: '여자',
            data: [8000, 4000, 9000],           
        },                
        ],         
    },
    }

// 침입자 의류 및 선호 색상군.
cloth_loitering_data = [
    {
        clothSize: '상의 길이',
        man: '반팔 우위 (63%)',
        woman: '긴팔 우위 (65%)',        
    },
    {
        clothSize: '상의 색 비중',
        man: '',
        woman: '',        
    },
    {
        clothSize: '하의 길이',
        man: '긴바지 우위 (78%)',
        woman: '긴바지 우위 (78%)',        
    },
    {
        clothSize: '하의 색 비중',
        man: '',
        woman: '',        
    },
]

// camera-event 객체 Pie
camera_event_ctrl_pie_data = 
{
    categories: ['객체'],
    series: [
    {
        name: '남성',
        data: 26.02,
    },
    {
        name: '여성',
        data: 40.47,
    },
    {
        name: '마스크',
        data: 7.71,
    },
    {
        name: '차량',
        data: 15.45,
    },
    {
        name: 'LPR',
        data: 13.1,
    },
    ]
}

camera_event_evt_pie_data = 
{
    categories: ['이벤트'],
    series: [
    {
        name: '침입',
        data: 26.02,
    },
    {
        name: '배회',
        data: 40.47,
    },
    {
        name: '카운팅',
        data: 7.71,
    },
    {
        name: '불법 주정차',
        data: 15.45,
    },
    {
        name: '블랙리스트',
        data: 13.1,
    },
    ]
}

evt_time_info_data =
{
    categories: [
        '1층 서관 CT실',
        '2층 서관 CT실',
        '3층 서관 CT실',
        '4층 서관 CT실',
        '5층 서관 CT실',
        '6층 서관 CT실',
        '7층 서관 CT실',
        '8층 서관 CT실',
        '9층 서관 CT실',
        '10층 서관 CT실',
        '11층 서관 CT실',
        '12층 서관 CT실',
        '13층 서관 CT실',
        '14층 서관 CT실',
        '15층 서관 CT실',
                
    ],
    series: [
        {
        name: '여자',
        data: [4007, 5067, 7221, 8358, 8500, 7730, 4962, 2670, 6700, 776, 131, 500, 1000, 400, 400],
        stackGroup: 'Control',  
        },
        {
        name: '침입',
        data: [3805, 4728, 7244, 8291, 8530, 8126, 5483, 3161, 1274, 2217, 377, 100, 2000, 400, 400],
        stackGroup: 'Event',
        },
        {
        name: '남자',
        data: [1392, 1671, 2092, 2339, 2611, 2511, 1277, 6145, 1713, 1974, 194, 3000, 3000, 400, 400],
        stackGroup: 'Control',
        },
        {
        name: '배회',
        data: [1320, 1558, 1927, 2212, 2556, 2433, 1304, 8076, 3800, 6057, 523, 2000, 4000, 400, 400],
        stackGroup: 'Event',
        },
        {
        name: '마스크',
        data: [320, 1558, 1927, 2212, 2556, 2433, 1304, 8076, 3800, 6057, 523, 2000, 4000, 400, 400],
        stackGroup: 'Control',
        },
        {
        name: '카운팅',
        data: [125, 1558, 1927, 2212, 2556, 2433, 1304, 8076, 3800, 6057, 523, 2000, 4000, 400, 400],
        stackGroup: 'Event',
        },
        {
        name: '차량',
        data: [1392, 1671, 2092, 2339, 2611, 2511, 1277, 6145, 1713, 1974, 194, 3000, 3000, 400, 400],
        stackGroup: 'Control',
        },
        {
        name: '불법 주.정차',
        data: [1320, 1558, 1927, 2212, 2556, 2433, 1304, 8076, 3800, 6057, 523, 2000, 4000, 400, 400],
        stackGroup: 'Event',
        },
        {
        name: '차량인식번호',
        data: [320, 1558, 1927, 2212, 2556, 2433, 1304, 8076, 3800, 6057, 523, 2000, 4000, 400, 400],
        stackGroup: 'Control',
        },
        {
        name: '블랙리스트',
        data: [125, 1558, 1927, 2212, 2556, 2433, 1304, 8076, 3800, 6057, 523, 2000, 4000, 400, 400],
        stackGroup: 'Event',
        },           
    ],
    };

    

// 카메라 이벤트별 그래프
camera_event_line_bar_data = {
    categories: ['카운팅', '침입', '배회', "마스크미착용"],
    series: {
        column : [
        {
            name: '오늘',
            data: [5000, 3000, 7000, 3000],
        },
        ],        
        line : [
        {
            name: '어제',
            data: [8000, 4000, 9000, 5000],           
        },
        {
            name: '1주전',
            data: [8000, 4000, 9000, 7000],           
        },                 
        ],         
    },
    }


// 같은 시간대 비교
camera_event_evt_grid_data = [
    {
        title: '카운팅',
        today: '799',
        yesterday: '888',        
        prepare_prev_day: '41%',        
        prepare_prev_week: '888',        
        prepare_week: '41%',           
    },
    {
        title: '침입',
        today: '68',
        yesterday: '70',        
        prepare_prev_day: '353%',        
        prepare_prev_week: '70',        
        prepare_week: '41%',            
    },
    {
        title: '배회',
        today: '560',
        yesterday: '999',        
        prepare_prev_day: '7%',        
        prepare_prev_week: '999',        
        prepare_week: '41%',       
    },
    {
        title: '마스크미착용',
        today: '33',
        yesterday: '22',        
        prepare_prev_day: '59%',        
        prepare_prev_week: '22',        
        prepare_week: '41%',       
    },
]
// TEST Data /////////////////////////////////////////////////////////////////////////////////////////// nonoc.html에서 사용중
pieData1 = 
    {
        categories: ['Browser'],
        series: [
        {
            name: 'Chrome',
            data: 46.02,
        },
        {
            name: 'IE',
            data: 20.47,
        },
        {
            name: 'Firefox',
            data: 17.71,
        },
        {
            name: 'Safari',
            data: 5.45,
        },
        {
            name: 'Opera',
            data: 3.1,
        },
        {
            name: 'Etc',
            data: 7.25,
        }
        ]
    }

DonutData1 = 
{
    categories: ['Browser'],
    series: [
    {
        name: 'Chrome',
        data: 26.02,
    },
    {
        name: 'IE',
        data: 40.47,
    },
    {
        name: 'Firefox',
        data: 7.71,
    },
    {
        name: 'Safari',
        data: 15.45,
    },
    {
        name: 'Opera',
        data: 13.1,
    },
    {
        name: 'Etc',
        data: 17.25,
    }
    ]
}

