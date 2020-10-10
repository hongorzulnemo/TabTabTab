function detNumberOfBoxesInEachRow(length) {
    let powerCounter = 0;
    let squared = 0;
    while (length > squared) {
        powerCounter++;
        squared = Math.pow(powerCounter, 2);
    }
    return powerCounter;
}


function word_map(props) {
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
    const svg = d3.select('#word_map_svg');
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
        return (stage == 1) ? '#e9c618ab' :
        (stage == 2) ? '#de425bab' :
        (stage == 3) ? '#de425b' : '#000';
    }

    const boxStrokeFunc = (d) => {
        const focused = d.focused;
        return (focused == true) ? '#000' : '#fff';
    }

    const boxTextXOffsetFunc = (d) => {
        return d.name.length*3.5; // needs to scale this!!!
    }

    const main_ContGroup = new ContainerGroup(svg, 'main_ContGroup');
    

    // Boxes GUP START
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
    // Boxes GUP END

    // Boxes Text START
    const box_text = new GeneralUpdatePattern('box_text', data, 'text', main_ContGroup.group); 
    box_text.merge
        .attr('x', d => boxLength / 2 - boxTextXOffsetFunc(d))
        .attr('y', boxLength / 2)
        .text(d => boxTextFunc(d))
        .attr('transform', translationFunc);
    box_text.exit.remove();
    // Boxes Text END

        
    // Boxes Shell START
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
        .on('click', function(i, d) {

            // Update Word Map
            const selected = getExactSameWordNodeFromArray(ALL_WORDNODES, d);
            selected.stage = 2;
            diagram_data = copy(shuffle_array([...ALL_WORDNODES]), 3);
            diagram_data = [...diagram_data, selected];
            updateWordMap();





            // Update Word Tracker
            updateTrackerDataArray(wordTracker_data, d);
            updateWordTracker();

        })
    boxes_shell.exit.remove();
    // Boxes Shell END
}

