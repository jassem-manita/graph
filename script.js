document.addEventListener('DOMContentLoaded', function () {
    let currentFunction = "x^2";
    let currentXValue = 0;

    const functionInput = document.getElementById('functionInput');
    const graphContainer = document.getElementById('graph');
    const slider = document.getElementById('slider');
    const sliderValue = document.getElementById('sliderValue');

    sliderValue.innerText = currentXValue;

    functionInput.addEventListener('input', updateGraph);
    slider.addEventListener('input', updateSliderValue);

    updateGraph();

    function updateGraph() {
        currentFunction = functionInput.value;
        const xValues = Array.from({ length: 100 }, (_, i) => i * 0.2 - 10);
        const yValues = xValues.map(x => evaluateFunction(currentFunction, x));

        Plotly.react(graphContainer, [{
            x: xValues,
            y: yValues,
            type: 'scatter',
            mode: 'lines',
            name: currentFunction,
        }], {
            margin: { t: 0 },
        });

        sliderValue.innerText = currentXValue;

        Plotly.react(graphContainer, [{
            marker: {
                color: 'red',
                size: 8,
            },
            x: [currentXValue],
            y: [evaluateFunction(currentFunction, currentXValue)],
        }]);
    }

    function updateSliderValue() {
        currentXValue = parseFloat(slider.value);
        updateGraph();
    }

    function evaluateFunction(func, x) {
        try {
            const expression = func.replace(/x/g, `(${x})`);
            return math.evaluate(expression);
        } catch (error) {
            return NaN;
        }
    }
});
