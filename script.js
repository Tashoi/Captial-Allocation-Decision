const ctx = document.getElementById('riskChart');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Base Case', 'Rent Drop', 'Cost Increase', 'Rate Increase'],
        datasets: [
            {
                label: 'Project Connect',
                data: [47.6, 40, 38, 35],
                borderColor: 'green',
                tension: 0
            },
            {
                label: 'Tysons Central',
                data: [24.3, 15, 10, -2.5],
                borderColor: 'orange',
                tension: 0
            },
            {
                label: 'Poplar Point',
                data: [5.5, -12.9, -12.4, -21.6],
                borderColor: 'red',
                tension: 0
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true
            }
        },
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'Residual Land Value ($M)'
                }
            }
        }
    }
});
