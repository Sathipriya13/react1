import React from "react";

import './table.css'
export default function table(){
    return(
<div>
<h1><center>Table</center></h1>
<center>
<table> 
            <tr>
                <th>Teams</th>
                <th>City</th>
                <th>Home ground</th>
                <th>Debut</th>
                <th>Owner</th>
            </tr>
            <tr>
                <th>Chennai Super Kings</th>
                <th>Chennai,Tamilnadu</th>
                <th>M.A.Chidambaram Stadium</th>
                <th>2008</th>
                <th>
                    <ul type="circle">
                        <li>N.Srinivasan</li>
                    </ul>
                </th>
            </tr>
            <tr>
                <th>Delhi Capitals</th>
                <th>New Delhi,Delhi</th>
                <th>Arun Jaitly Stadium</th>
                <th></th>
                <th>
                    <ul type="circle">
                        <li>Sajjan Jindal</li>
                        <li>G.M.Rao</li>
                    </ul>
                </th>
            </tr>
            <tr>
                <th>Gujarath Titans</th>
                <th>Ahmedabad,Gujarath</th>
                <th>Narendra Modi Stadium</th>
                <th>2022</th>
                <th>
                    <ul type="circle">
                        <li>Steve Koltes</li>
                        <li>Juhi Chawla</li>
                        <li>Jay mehta</li>
                    </ul>
                </th>
            </tr>
            <tr>
                <th>Kolkata Knight Riders</th>
                <th>Kolkata,West Bengal</th>
                <th>Eden Gardens</th>
                <th>2008</th>
                <th>
                    <ul type="circle">
                        <li>Shah Rukh</li>
                        <li>Juhi Chawla</li>
                        <li>Jay Mehta</li>
                    </ul>
                </th>
            </tr>
            <tr>
                <th>Lucknow Super Gaints</th>
                <th>Lucknow.Uttar Pradesh</th>
                <th>BRSABV Ekana Cricket Stadium</th>
                <th>2022</th>
                <th>
                    <ul type="circle">
                        <li>
                            Sanjiv Goenka
                        </li>
                    </ul>
                </th>
            </tr>
        </table>
        </center>
</div>

);
}