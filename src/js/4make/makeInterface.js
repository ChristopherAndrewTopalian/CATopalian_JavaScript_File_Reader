// makeInterface.js

function makeInterface()
{
    ba(makeTitleOfApp());

    //-//

    ba(ce('br'));

    //-//

    // make hidden file input
    let fileInput = ce("input");
    fileInput.type = "file";
    fileInput.id = "fileInput";
    fileInput.style.display = "none";

    // onchange event
    fileInput.onchange = function(event)
    {
        inputSound();

        let file = event.target.files[0];

        if (file)
        {
            let reader = new FileReader();

            reader.onload = function(event)
            {
                inputSound();

                ge("theOutput").value = event.target.result;
            };

            reader.onerror = function(event)
            {
                console.error("error reading file:", event);
            };

            reader.readAsText(file);
        }
    };
    ba(fileInput);

    //-//

    // openButton
    let openButton = ce("button");
    openButton.id = "openButton";
    openButton.textContent = "Open";

    // onmouseover event
    openButton.onmouseover = function()
    {
        hoverSound();
    };

    // onclick event
    openButton.onclick = function()
    {
        clickSound();

        ge("fileInput").click();
    };
    ba(openButton);

    //-//

    // make line break
    ba(ce("br"));

    //--//

    // theOutput
    let theOutput = ce("textarea");
    theOutput.id = "theOutput";
    theOutput.style.width = '95%';
    theOutput.style.height = '150px';
    theOutput.style.padding = '4px 8px';
    theOutput.style.fontSize = 20 + 'px';
    theOutput.style.backgroundColor = 'rgb(0, 0, 0)';
    theOutput.style.color = 'rgb(255, 255, 255)';
    ba(theOutput);

    //-//

    ba(ce('br'));

    //-//

    let downloadButton = ce('button');
    downloadButton.textContent = 'Download';
    //downloadButton.style.float = 'right';
    downloadButton.onmouseover = function()
    {
        hoverSound();
    };
    downloadButton.onclick = function()
    {
        clickSound();

        let data = theOutput.value;

        //-//

        let dateTime = new Date().toLocaleString();

        let theAnchor = ce("a");
        theAnchor.download = dateTime;

        let theBlob = new Blob([data],
        {
            type: "text/plain"
        });

        theAnchor.href = window.URL.createObjectURL(theBlob);

        theAnchor.click();
    };
    ba(downloadButton);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

