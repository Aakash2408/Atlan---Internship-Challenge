import React from 'react';
import Papa from 'papaparse';

import InfoBox from '../info-box/info-box.component';
import ChartDisplay from '../chart-display/chart-display.component';

import './content.styles.css';

class Content extends React.Component {
    constructor(){
        super();
        this.state = {
            chartData1: {},
            chartData2: {},
            chartData3: {},
            chartData4: {},
            chartData5: {},
            chartData6: {},
            chartData7: {},
            chartData8: {},
            chartData9: {},
            chartData10: {},
            rawMatch: {},
            rawPlayer: {},
            rawBallByBall: {}
            /*rawSeason: {},
            rawTeam: {},
            rawPlayerMatch: {},*/
        };
    }

    componentDidMount(){
        this.getChartData();
    }

    // Converting CSV file to JSON data
    getChartData = () => {
        Papa.parse('./ipl-csv-dataset/Match.csv', {
            header: true,
            download: true,
            dynamicTyping: true,
            complete: this.saveMatch
        });
        Papa.parse('./ipl-csv-dataset/Player.csv', {
            header: true,
            download: true,
            dynamicTyping: true,
            complete: this.savePlayer
        });
        Papa.parse('./ipl-csv-dataset/Ball_by_Ball.csv', {
            header: true,
            download: true,
            dynamicTyping: true,
            complete: this.saveBallByBall
        });
        /*Papa.parse('./ipl-csv-dataset/Season.csv', {header: true, download: true, dynamicTyping: true, complete: this.saveSeason});
        Papa.parse('./ipl-csv-dataset/Team.csv', {header: true, download: true, dynamicTyping: true, complete: this.saveTeam});
        Papa.parse('./ipl-csv-dataset/Player_Match.csv', {header: true, download: true, dynamicTyping: true, complete: this.savePlayerMatch});*/
    }

    // Saving JSON data to state and calling associated functions to process data
    saveMatch = (result) => {
        this.setState({ rawMatch: result });
        this.dataForChart1();
        this.dataForChart3();
       
        this.dataForChart5();
        this.dataForChart8();
        
        this.dataForInfoBox1and2();
    }
    savePlayer = (result) => {
        this.setState({ rawPlayer: result });
       
        this.dataForChart2();
        this.dataForChart4();
        this.dataForChart6();
    }
    saveBallByBall = (result) => {
        this.setState({ rawBallByBall: result });
        this.dataForChart7();
        this.dataForChart9();
        this.dataForChart10();
        this.dataForInfoBox3and4();
        
    }
    /*saveSeason = (result) => {this.setState({rawSeason: result});}
    saveTeam = (result) => {this.setState({rawTeam: result});}
    savePlayerMatch = (result) => {this.setState({rawPlayerMatch: result});}*/

    dataForChart1 = () => {
        // Bat or Field Decision
        let batCount = 0;
        if(Object.keys(this.state.rawMatch).length !== 0){
            this.state.rawMatch.data.forEach(element => {
                if(element.toss_decision === "bat"){
                    batCount++;
                }
            });

            this.setState({
                chartData1: {
                    labels: ['Bat', 'Field'],
                    datasets: [
                        {
                            label: 'Bat or Field Decision',
                            data: [batCount, this.state.rawMatch.data.length - batCount],
                            backgroundColor: [
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(0, 150, 136, 0.5)',
                            ],
                            borderColor: [
                                'rgba(121, 85, 72,1)',
                                'rgba(0, 150, 136, 1)',
                            ],
                            borderWidth: 1
                        }
                    ]
                }
            });
        }
    }

    dataForChart2 = () => {
        var Bowling_Skill = {};
        if(Object.keys(this.state.rawPlayer).length !== 0){
            this.state.rawPlayer.data.forEach(element => {
                if(Bowling_Skill[element.Bowling_Skill] !== undefined) {
                    Bowling_Skill[element.Bowling_Skill] += 1;
                } else if(element.Bowling_Skill !== undefined ) {
                    Bowling_Skill[element.Bowling_Skill] = 1;
                }
            });

            this.setState({
                chartData2: {
                    labels: [...Object.keys(Bowling_Skill)],
                    datasets: [
                        {
                            label: 'Winner',
                            data: [...Object.values(Bowling_Skill)],
                            backgroundColor: [
                                'rgba(0, 150, 136, 0.5)',
                                'rgba(0, 150, 136, 0.5)',
                                'rgba(0, 150, 136, 0.5)',
                                'rgba(0, 150, 136, 0.5)',
                                'rgba(0, 150, 136, 0.5)',
                                'rgba(0, 150, 136, 0.5)',
                                'rgba(0, 150, 136, 0.5)',
                                'rgba(0, 150, 136, 0.5)',
                                'rgba(0, 150, 136, 0.5)',
                                'rgba(0, 150, 136, 0.5)',
                                'rgba(0, 150, 136, 0.5)',
                                'rgba(0, 150, 136, 0.5)',
                                'rgba(0, 150, 136, 0.5)',
                                'rgba(0, 150, 136, 0.5)',
                                'rgba(0, 150, 136, 0.5)'
                            ],
                            borderColor: [
                                'rgba(0, 150, 136, 1)',
                                'rgba(0, 150, 136, 1)',
                                'rgba(0, 150, 136, 1)',
                                'rgba(0, 150, 136, 1)',
                                'rgba(0, 150, 136, 1)',
                                'rgba(0, 150, 136, 1)',
                                'rgba(0, 150, 136, 1)',
                                'rgba(0, 150, 136, 1)',
                                'rgba(0, 150, 136, 1)',
                                'rgba(0, 150, 136, 1)',
                                'rgba(0, 150, 136, 1)',
                                'rgba(0, 150, 136, 1)',
                                'rgba(0, 150, 136, 1)',
                                'rgba(0, 150, 136, 1)',
                                'rgba(0, 150, 136, 1)'
                            ],
                            borderWidth: 1
                        }
                    ]
                }
            });
            this.forceUpdate();
        }
    }


    dataForChart3 = () => {
        // Result Type
        let result = {};
        if(Object.keys(this.state.rawMatch).length !== 0){
            this.state.rawMatch.data.forEach(element => {
                if(result[element.result] !== undefined) {
                    result[element.result] += 1;
                } else {
                    result[element.result] = 1;
                }
            });

            this.setState({
                chartData3: {
                    labels: [...Object.keys(result)],
                    datasets: [
                        {
                            label: 'Result Type',
                            data: [...Object.values(result)],
                            backgroundColor: [
                                'rgba(0, 150, 136, 0.5)',
                                'rgba(9, 168, 250,0.5)',
                                'rgba(255, 193, 7, 0.5)',
                                'rgba(255, 87, 34,0.5)'
                            ],
                            borderColor: [
                                'rgba(0, 150, 136, 1)',
                                'rgba(9, 168, 250.0)',
                                'rgba(255, 193, 7, 1)',
                                'rgba(255, 87, 34,1.0)'
                            ],
                            borderWidth: 1
                        }
                    ]
                }
            });
            this.forceUpdate();
        }
    }

    dataForChart4 = () => {
        // Left or Right Handed Batsmen
        var handType = {};
        if(Object.keys(this.state.rawPlayer).length !== 0){
            handType.Left_Hand = 0;
            handType.Right_Hand = 0;
            this.state.rawPlayer.data.forEach(element => {
                if(element.Batting_Hand === "Left_Hand" || element.Batting_Hand === "Right_Hand") {
                    handType[element.Batting_Hand] += 1;
                }
            });

            this.setState({
                chartData4: {
                    labels: [...Object.keys(handType)],
                    datasets: [
                        {
                            label: 'Left or Right Handed Batsmen',
                            data: [...Object.values(handType)],
                            backgroundColor: [
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(0, 150, 136, 0.5)',
                            ],
                            borderColor: [
                                'rgba(233, 30, 99, 1)',
                                'rgba(0, 150, 136, 1)',
                            ],
                            borderWidth: 1
                        }
                    ]
                }
            });
            this.forceUpdate();
        }
    }
    dataForChart5 = () => {
        // Ttoal Matches wins by Per Team
        var winner = {};
        if(Object.keys(this.state.rawMatch).length !== 0){
            this.state.rawMatch.data.forEach(element => {
                if(winner[element.winner] !== undefined) {
                    winner[element.winner] += 1;
                } else if(element.winner !== undefined ) {
                    winner[element.winner] = 1;
                }
            });

            this.setState({
                chartData5: {
                    labels: [...Object.keys(winner)],
                    datasets: [
                        {
                            label: 'Winner',
                            data: [...Object.values(winner)],
                            backgroundColor: [
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99, 0.5)',

                            ],
                            borderColor: [
                                'rgba(233, 30, 99, 1)',
                                'rgba(233, 30, 99, 1)',
                                'rgba(233, 30, 99, 1)',
                                'rgba(233, 30, 99, 1)',
                                'rgba(233, 30, 99, 1)',
                                'rgba(233, 30, 99, 1)',
                                'rgba(233, 30, 99, 1)',
                                'rgba(233, 30, 99, 1)',
                                'rgba(233, 30, 99, 1)',
                                'rgba(233, 30, 99, 1)',
                                'rgba(233, 30, 99, 1)',
                                'rgba(233, 30, 99, 1)',
                                'rgba(233, 30, 99, 1)',
                                'rgba(233, 30, 99, 1)',
                            ],
                            borderWidth: 1
                        }
                    ]
                }
            });
            this.forceUpdate();
        }
    }

    dataForChart6 = () => {
        // Player Nationality
        var nationality = {};
        if(Object.keys(this.state.rawPlayer).length !== 0){
            this.state.rawPlayer.data.forEach(element => {
                if(nationality[element.Country] !== undefined) {
                    nationality[element.Country] += 1;
                } else if(element.Country !== undefined && element.Is_Umpire !== "1") {
                    nationality[element.Country] = 1;
                }
            });

            this.setState({
                chartData6: {
                    labels: [...Object.keys(nationality)],
                    datasets: [
                        {
                            label: 'Player Nationality',
                            data: [...Object.values(nationality)],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.5)',
                                'rgba(54, 162, 235, 0.5)',
                                'rgba(245, 135, 31, 0.5)',
                                'rgba(128, 203, 174, 0.5)',
                                'rgba(255, 99, 132, 0.5)',
                                'rgba(54, 162, 235, 0.5)',
                                'rgba(255, 206, 86, 0.5)',
                                'rgba(75, 192, 192, 0.5)',
                                'rgba(153, 102, 255, 0.5)',
                                'rgba(255, 159, 64, 0.5)',
                                'rgba(255, 99, 132, 0.5)',
                                'rgba(54, 162, 235, 0.5)',
                                'rgba(245, 135, 31, 0.5)',
                                'rgba(128, 203, 174, 0.5)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(245, 135, 31, 1)',
                                'rgba(128, 203, 174, 1)',
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)',
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(245, 135, 31, 1)',
                                'rgba(128, 203, 174, 1)'
                            ],
                            borderWidth: 1
                        }
                    ]
                }
            });
            this.forceUpdate();
        }
    }

    dataForChart7 = () => {
        // Average runs per over
        let averages = {};

        if(Object.keys(this.state.rawBallByBall).length !== 0) {
            this.state.rawBallByBall.data.forEach(element => {
                if(averages[element.Over_Id] !== undefined && element.Batsman_Scored !== 'Do_nothing' && element.Batsman_Scored !== ' ') {
                    averages[element.Over_Id] = { sum : averages[element.Over_Id].sum + element.Batsman_Scored, count : averages[element.Over_Id].count + 1 };
                } else if(element.Over_Id !== undefined && element.Batsman_Scored !== 'Do_nothing' && element.Batsman_Scored !== ' ') {
                    averages[element.Over_Id] = { sum : element.Batsman_Scored, count : 1 };
                }
            });

            Object.entries(averages).forEach(element => {
                console.log(element);
                averages[element[0]] = parseFloat(element[1].sum) / element[1].count;
            });

            this.setState({
                chartData7: {
                    labels: [...Object.keys(averages)],
                    datasets: [
                        {
                            label: 'Average Runs Every Over',
                            data: [...Object.values(averages)],
                            backgroundColor: [
                                'rgba(0, 150, 136, 0.5)',
                            ],
                            borderColor: [
                                'rgba(103, 58, 183,1)'
                            ],
                            borderWidth: 1
                        }
                    ]
                }
            });
            this.forceUpdate();
        }
    }
    
    dataForChart8 = () => {
        //Toss Winners
        var toss_winner = {};
        if(Object.keys(this.state.rawMatch).length !== 0){
            this.state.rawMatch.data.forEach(element => {
                if(toss_winner[element.toss_winner] !== undefined) {
                    toss_winner[element.toss_winner] += 1;
                } else if(element.toss_winner !== undefined && element.toss_winner !== ' ') {
                    toss_winner[element.toss_winner] = 1;
                }
            });

            this.setState({
                chartData8: {
                    labels: [...Object.keys(toss_winner)],
                    datasets: [
                        {
                            label: 'Toss Win',
                            data: [...Object.values(toss_winner)],
                            backgroundColor: [
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99, 0.5)'
                            ],
                            borderColor: [
                                'rgba(233, 30, 99, 1)',
                                'rgba(233, 30, 99, 1)',
                                'rgba(233, 30, 99, 1)',
                                'rgba(233, 30, 99, 1)',
                                'rgba(233, 30, 99, 1)',
                                'rgba(233, 30, 99, 1)',
                                'rgba(233, 30, 99, 1)',
                                'rgba(233, 30, 99, 1)',
                                'rgba(233, 30, 99, 1)',
                                'rgba(233, 30, 99, 1)',
                                'rgba(233, 30, 99, 1)',
                                'rgba(233, 30, 99, 1)',
                                'rgba(233, 30, 99, 1)',
                                'rgba(233, 30, 99, 1)'
                            ],
                            borderWidth: 1
                        }
                    ]
                }
            });
            this.forceUpdate();
        }
    }
    dataForChart9 = () => {
        // Host Countries
       
        var city = {};
        if(Object.keys(this.state.rawMatch).length !== 0){
            this.state.rawMatch.data.forEach(element => {
                if(city[element.city] !== undefined) {
                    city[element.city] += 1;
                } else if(element.city !== undefined && element.city !== ' ') {
                    city[element.city] = 1;
                }
            });

            this.setState({
                chartData9: {
                    labels: [...Object.keys(city)],
                    datasets: [
                        {
                            label: 'Host Countries',
                            data: [...Object.values(city)],
                            backgroundColor: [
                                'rgba(33, 150, 243,0.5)',
                                'rgba(76, 175, 80,0.5)',
                                'rgba(244, 67, 54,0.5)',
                                'rgba(33, 150, 243,0.5)',
                                'rgba(76, 175, 80,0.5)',
                                'rgba(244, 67, 54,0.5)',
                                'rgba(33, 150, 243,0.5)',
                                'rgba(76, 175, 80,0.5)',
                                'rgba(244, 67, 54,0.5)',
                                'rgba(33, 150, 243,0.5)',
                                'rgba(76, 175, 80,0.5)',
                                'rgba(244, 67, 54,0.5)',
                                'rgba(33, 150, 243,0.5)',
                                'rgba(76, 175, 80,0.5)',
                                'rgba(244, 67, 54,0.5)',
                                'rgba(33, 150, 243,0.5)',
                                'rgba(76, 175, 80,0.5)',
                                'rgba(244, 67, 54,0.5)',
                                'rgba(33, 150, 243,0.5)',
                                'rgba(76, 175, 80,0.5)',
                                'rgba(244, 67, 54,0.5)',
                                'rgba(33, 150, 243,0.5)',
                                'rgba(76, 175, 80,0.5)',
                                'rgba(244, 67, 54,0.5)',
                                'rgba(33, 150, 243,0.5)',
                                'rgba(76, 175, 80,0.5)',
                                'rgba(244, 67, 54,0.5)',
                                'rgba(33, 150, 243,0.5)',
                                'rgba(76, 175, 80,0.5)',
                                'rgba(244, 67, 54,0.5)',
                                'rgba(33, 150, 243,0.5)',
                                'rgba(76, 175, 80,0.5)',
                                
                                
                            ],
                            borderColor: [
                                'rgba(33, 150, 243,1.0)',
                                'rgba(76, 175, 80,1.0)',
                                'rgba(244, 67, 54,1.0)',
                                'rgba(33, 150, 243,1.0)',
                                'rgba(76, 175, 80,1.0)',
                                'rgba(244, 67, 54,1.0)',
                                'rgba(33, 150, 243,1.0)',
                                'rgba(76, 175, 80,1.0)',
                                'rgba(244, 67, 54,1.0)',
                                'rgba(33, 150, 243,1.0)',
                                'rgba(76, 175, 80,1.0)',
                                'rgba(244, 67, 54,1.0)',
                                'rgba(33, 150, 243,1.0)',
                                'rgba(76, 175, 80,1.0)',
                                'rgba(244, 67, 54,1.0)',
                                'rgba(33, 150, 243,1.0)',
                                'rgba(76, 175, 80,1.0)',
                                'rgba(244, 67, 54,1.0)',
                                'rgba(33, 150, 243,1.0)',
                                'rgba(76, 175, 80,1.0)',
                                'rgba(244, 67, 54,1.0)',
                                'rgba(33, 150, 243,1.0)',
                                'rgba(76, 175, 80,1.0)',
                                'rgba(244, 67, 54,1.0)',
                                'rgba(33, 150, 243,1.0)',
                                'rgba(76, 175, 80,1.0)',
                                'rgba(244, 67, 54,1.0)',
                                'rgba(33, 150, 243,1.0)',
                                'rgba(76, 175, 80,1.0)',
                                'rgba(244, 67, 54,1.0)',
                                'rgba(33, 150, 243,1.0)',
                                'rgba(76, 175, 80,1.0)',
                                'rgba(244, 67, 54,1.0)',
                                'rgba(33, 150, 243,1.0)',
                                'rgba(76, 175, 80,1.0)',
                                'rgba(244, 67, 54,1.0)',
                            ],
                            borderWidth: 1
                        }
                    ]
                }
            });
            this.forceUpdate();
        }
    }
    dataForChart10 = () => {

        var dismissalType = {};
        if(Object.keys(this.state.rawBallByBall).length !== 0){
            this.state.rawBallByBall.data.forEach(element => {
                if(dismissalType[element.Dissimal_Type] !== undefined) {
                    dismissalType[element.Dissimal_Type] += 1;
                } else if(element.Dissimal_Type !== undefined && element.Dissimal_Type !== ' ') {
                    dismissalType[element.Dissimal_Type] = 1;
                }
            });

            this.setState({
                chartData10: {
                    labels: [...Object.keys(dismissalType)],
                    datasets: [
                        {
                            label: 'Types of Dismissals',
                            data: [...Object.values(dismissalType)],
                            backgroundColor: [
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99, 0.5)',
                                'rgba(233, 30, 99, 0.5)'
                            ],
                            borderColor: [
                                'rgba(233, 30, 99, 1)',
                                'rgba(233, 30, 99, 1)',
                                'rgba(233, 30, 99, 1)',
                                'rgba(233, 30, 99, 1)',
                                'rgba(233, 30, 99, 1)',
                                'rgba(233, 30, 99, 1)',
                                'rgba(233, 30, 99, 1)',
                                'rgba(233, 30, 99, 1)',
                                'rgba(233, 30, 99, 1)',
                                'rgba(233, 30, 99, 1)',
                                'rgba(233, 30, 99, 1)',
                                'rgba(233, 30, 99, 1)',
                                'rgba(233, 30, 99, 1)',
                                'rgba(233, 30, 99, 1)'
                            ],
                            borderWidth: 1
                        }
                    ]
                }
            });
            this.forceUpdate();
        }
      
    }
    dataForInfoBox1and2 = () => {        
        // Number of Superovers
        let superovers = 0;

        if(Object.keys(this.state.rawMatch).length !== 0){
            // Number of Matches
            this.setState({
                infoBox1: this.state.rawMatch.data.length - 1
            });

            for(var i = 0; i < this.state.rawMatch.data.length; i++){
                if(this.state.rawMatch.data[i].result === 'tie'){
                    superovers++;
                }
            }

            this.setState({ infoBox2: superovers });
        }
    }

    dataForInfoBox3and4 = () => {
        // Number of Fours
        let fours = 0;
        let sixes = 0;
        if(Object.keys(this.state.rawBallByBall).length !== 0){
            this.state.rawBallByBall.data.forEach(element => {
                if(element.Batsman_Scored === 4) {
                    fours++;
                }
                else if(element.Batsman_Scored === 6) {
                    sixes++;
                }
            });
            this.setState({ infoBox3: fours, infoBox4: sixes });
        }
        this.forceUpdate();
    }

    render() {
        /*==== Calculates current width of browser ====*/
        let w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth;

        return (
            <div className='content-container'>
                <div className='title-container'>
                    <h1><span className='bold'>Indian Premier League</span> (2008-2017)</h1>
                </div>
                <div className='infobox-container'>
                    <InfoBox data={this.state.infoBox1} title='Total Matches' icon={<i className="fas fa-cricket fa-4x"></i>} text='Matches played till now.' />
                    <InfoBox data={this.state.infoBox2} title='Total Superovers' icon={<i className="fas fa-cricket fa-4x"></i>} text='Number of tie matches till now.' />
                    <InfoBox data={this.state.infoBox3} title='Total Fours' icon={<i className="fas fa-cricket fa-4x"></i>} text='Number of balls hitting the boundary.'  />
                    <InfoBox data={this.state.infoBox4} title='Total Sixes' icon={<i className="fas fa-cricket fa-4x"></i>} text='Number of balls crossing the boundary.'  />
                </div>
                <div className='graph-container'>
                    
                    <ChartDisplay 
                        selectChart='bar' 
                        displayLegend={false} 
                        chartData={this.state.chartData1} 
                        titleText='Batting / Fielding Decision' 
                    />
                    <ChartDisplay 
                        selectChart='horizontalBar' 
                        displayLegend={false} 
                        chartData={this.state.chartData2} 
                        titleText='Bowling Skill' 
                    />
                    <ChartDisplay 
                        selectChart='doughnut' 
                        chartData={this.state.chartData3} 
                        titleText='Result Type' 
                    />
                     <ChartDisplay 
                        selectChart='pie' 
                        chartData={this.state.chartData4} 
                        titleText='Left / Right Handed Batsmen' 
                    />
                     <ChartDisplay 
                        selectChart='horizontalBar' 
                        displayLegend={false} 
                        chartData={this.state.chartData5} 
                        titleText='Total Matches win' 
                    />
                       <ChartDisplay 
                        selectChart='horizontalBar' 
                        displayLegend={false} 
                        chartData={this.state.chartData6} 
                        titleText='Player Nationality' 
                    />
                    <ChartDisplay 
                        selectChart='line' 
                        chartData={this.state.chartData7} 
                        titleText='Average Runs Every Over' 
                        selectLabel={true} 
                        selectLabelText='Overs' 
                    />
                    <ChartDisplay 
                        selectChart={x < 900 ? 'horizontalBar' : 'bar'} 
                        displayLegend={false} chartData={this.state.chartData8} 
                        titleText='Toss winners' 
                    />
                    
                   
                  
                     <ChartDisplay 
                        selectChart='horizontalBar' 
                        displayLegend={false} 
                        chartData={this.state.chartData10} 
                        titleText='Type of  Dismissal' 
                    />
                     <ChartDisplay 
                        selectChart='bar' 
                        chartData={this.state.chartData9} 
                        titleText='Matches city' 
                        displayLegend={false}
                    />
                 
                    
                </div>
            </div>
        )
    }
}

export default Content;