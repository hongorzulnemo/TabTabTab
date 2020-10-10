function detNumberOfBoxesInEachRow(length) {
    let powerCounter = 0;
    let squared = 0;
    while (length > squared) {
        powerCounter++;
        squared = Math.pow(powerCounter, 2);
    }
    return powerCounter;
}


const fillFunc_color_array_word_map = ['#fff','#e5e5e5', '#edaa9b', '#e56c56'];


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
        return (stage == 1) ? fillFunc_color_array_word_map[1] :
        (stage == 2) ? fillFunc_color_array_word_map[2] :
        (stage == 3) ? fillFunc_color_array_word_map[3] : fillFunc_color_array_word_map[0];
    }

    const boxStrokeFunc = (d) => {
        const focused = d.focused;
        return (focused == true) ? '#000' : '#fff';
    }

    // const boxTextXOffsetFunc = (d) => {
    //     return d.name.length*25; // needs to scale this!!!
    // }

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

    // svg.append('image').attr('href', 'https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png')
    // .attr('height', boxLength)
    // .attr('width', boxLength)

    const imageHrefFunc = (d) => {
        return d.imgUrl;
    }
    // Boxes Image START
    const boxPadding = 60;
    const box_image = new GeneralUpdatePattern('box_image', data, 'image', main_ContGroup.group);        
    box_image.merge
        .attr('href', imageHrefFunc)
        .attr('height', boxLength - boxPadding)
        .attr('width', boxLength - boxPadding)
        .attr('x', boxPadding / 2)
        .attr('y', boxPadding / 2)
        .attr('preserveAspectRatio', 'xMidYMid slice')
        .attr('transform', translationFunc);
    box_image.exit.remove();
    // Boxes Image END


    // Boxes Text Rect START
    const box_text_rect_height = 100;
    const box_text_rect_width = boxLength;
    const box_text_rect = new GeneralUpdatePattern('box_text_rect', data, 'rect', main_ContGroup.group);        
    box_text_rect.merge
        .attr('x', d => boxLength / 2 - box_text_rect_width / 2 + boxPadding / 2)
        .attr('y', boxLength - box_text_rect_height - boxPadding / 2)
        .attr('width', box_text_rect_width - boxPadding)
        .attr('height', box_text_rect_height)
        .attr('fill', '#fff')
        .attr('transform', translationFunc);
    box_text_rect.exit.remove();
    // Boxes Text Rect END

    // Boxes Text START
    const box_text = new GeneralUpdatePattern('box_text', data, 'text', main_ContGroup.group);        
    box_text.merge
        .attr('x', d => boxLength / 2)
        .attr('text-anchor', 'middle')
        .attr('y', boxLength - 60 * 0.5 - boxPadding / 2)
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

            // // Update Word Map
            // selected.stage = 2;
            // // diagram_data = copy(shuffle_array([...ALL_WORDNODES]), 3);
            // diagram_data = copy(generateSomeDataOfSameCategory(selected), 2);
            // console.log(diagram_data)



            
            // 0. Create a new one
            const selectedWordNode = copy(ALL_WORDNODES).filter(wd => wd.id === d.id)[0];
            selectedWordNode.stage = 2;
            // 1. Find out one of its categories
            const selectedCategory = findOneCategory(selectedWordNode.id);
            // 2. Get n-2 number of words of that category
            const newWordNodes = generateNewWordNodes(selectedWordNode.id, selectedCategory.id, TOTAL_NUMBER_OF_NODES - 2);
            // 3. Get 1 different word of different category
            const differentWordNodes = findDifferentWordNodes(selectedWordNode.id, selectedCategory.id, 1);
            // 4. Rewrite global array with these n elements;
            diagram_data = [...newWordNodes, ...differentWordNodes, selectedWordNode];
            updateWordMap();





            // Update Word Tracker
            updateTrackerDataArray(wordTracker_data, d);
            updateWordTracker();

        })
    boxes_shell.exit.remove();
    // Boxes Shell END
}

