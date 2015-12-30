import React from 'react'
import Paper from 'material-ui/lib/paper'


export default function CalculatorLayout({children}){
    return <div className="container">
        <Paper className="calculator-wrapper">
            {children}
        </Paper>
    </div>
}