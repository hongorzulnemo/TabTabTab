function detNumberOfBoxesInEachRow(length) {
    let powerCounter = 0;
    let squared = 0;
    while (length > squared) {
        powerCounter++;
        squared = Math.pow(powerCounter, 2);
    }
    return powerCounter;
}


const fillFunc_color_array_word_tracker = ['#fff','#ddebff', '#85abe1', '#076ec2'];




function word_tracker(props) {
    const {
        data: data,
        padFactor: padFactor,
        svgLength: svgLength
    } = props;
    
    const numberOfBoxesInEachRow = detNumberOfBoxesInEachRow(data.length);

    const crossed_array = d3.cross(d3.range(numberOfBoxesInEachRow), d3.range(numberOfBoxesInEachRow));
    data.forEach(d => {
        const crossed = crossed_array.shift();
        d.i = crossed[1];
        d.j = crossed[0];
    })
    const svg = d3.select('#word_tracker_svg');
    svg.attr('height', svgLength).attr('width', svgLength).style('background', '#fff');
    const boxLength = svgLength / numberOfBoxesInEachRow - padFactor;
    const translationFactor = svgLength / numberOfBoxesInEachRow;

    const translationFunc = (d) => {
        let i = d.i;
        let j = d.j;
        let xDirection = i * translationFactor + padFactor / 2;
        let yDirection = j * translationFactor + padFactor / 2;
        return `translate(${xDirection}, ${yDirection})`;
    };

    const boxTextFunc = (d) => {
        return d.name;
    }

    const fillFunc = (d) => {
        let stage = d.stage;
        return (stage == 1) ? fillFunc_color_array_word_tracker[1] :
        (stage == 2) ? fillFunc_color_array_word_tracker[2] :
        (stage == 3) ? fillFunc_color_array_word_tracker[3] : fillFunc_color_array_word_tracker[0];
    }
    

    const boxStrokeFunc = (d) => {
        const focused = d.focused;
        return (focused == true) ? '#000' : '#fff';
    }

    const boxTextXOffsetFunc = (d) => {
        return d.name.length*3.5; // needs to scale this!!!
    }

    const main_ContGroup = new ContainerGroup(svg, 'main_ContGroup');
    
    const boxes_GUP = new GeneralUpdatePattern('boxes_GUP', data, 'rect', main_ContGroup.group);
    boxes_GUP.merge
        .style('opacity', 1)
        .attr('height', boxLength)
        .attr('width', boxLength)
        .attr('fill', fillFunc)
        .attr('stroke', d => boxStrokeFunc(d))
        .attr('stroke-width', 5)
        .attr('transform', translationFunc);
    boxes_GUP.exit.remove();

    // const box_text = new GeneralUpdatePattern('box_text', data, 'text', main_ContGroup.group); 
    // box_text.merge
    //     .attr('x', d => boxLength / 2 - boxTextXOffsetFunc(d))
    //     .attr('y', boxLength / 2)
    //     .text(d => boxTextFunc(d))
    //     .attr('transform', translationFunc);
    // box_text.exit.remove();


        
    const boxes_shell = new GeneralUpdatePattern('boxes_shell', data, 'rect', main_ContGroup.group);
    boxes_shell.merge
        .style('fill', '#000')
        .attr('height', boxLength)
        .attr('width', boxLength)
        .attr('opacity', 0)
        .attr('transform', translationFunc);
    boxes_shell.merge
        .on('mouseover', function(i, d) {
            d3.select(this).style('opacity', 0.5);
        })
        .on('mouseout', function(i, d) {
            d3.select(this).style('opacity', 0);
        })
    boxes_shell.exit.remove();
}