document.addEventListener("DOMContentLoaded", function () {

    const canvas = document.getElementById('riskChart');

    if (!canvas) {
        console.error("riskChart not found");
        return;
    }

    const ctx = canvas.getContext('2d');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: [
                'Base Case',
                'Rent -5%',
                'Cost +10%',
                'Rate +100bps'
            ],
            datasets: [
                {
                    label: 'Project Connect',
                    data: [47.6, 40, 38, 35],
                    borderColor: 'green',
                    tension: 0,
                    fill: false
                },
                {
                    label: 'Tysons Central',
                    data: [24.3, 15, 10, -2.5],
                    borderColor: 'orange',
                    tension: 0,
                    fill: false
                },
                {
                    label: 'Poplar Point',
                    data: [5.5, -12.9, -12.4, -21.6],
                    borderColor: 'red',
                    tension: 0,
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,

            plugins: {
                legend: {
                    display: true
                },
                title: {
                    display: true,
                    text: 'Sensitivity Analysis (RLV in $M)'
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

});
