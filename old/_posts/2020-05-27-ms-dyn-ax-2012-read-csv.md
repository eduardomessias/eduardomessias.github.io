---
layout: post
title: Read CSV file
tags:
  - MSDynAX2012  
categories:
  - Microsoft Dynamics AX 2012 R3  
  - Common codes
---

Code to read CSV file once and for all

---

Once in a while every AX developer will have read a CSV file. The next time it'll be just copy and paste, among other things...

```
static Stack readCSV (FilenameOpen _filename = '')
{
    FilenameOpen            filename = _filename;
    str                     fileExtension;

    Dialog                  dialog;
    DialogField             dlgFile;

    Io                      io;
    container               csvCurrentLine;
    int                     lineNumber = 0;
    Stack                   csvLines;

    SysOperationProgress    progress;

    #File
    #AviFiles

    if (!filename)
    {
        dialog = new Dialog("Read data from a CSV");
        dialog.addText("Select File");
        dlgFile = dialog.addField(extendedTypeStr(FilenameOpen));
        dialog.run();

        if (dialog.closedOk())
        {
            filename = dlgFile.value();
        }
    }
        
    if (filename)
    {
        startLengthyOperation();

        try
        {
            io = new CommaTextIo(filename, #IO_Read);
            if (! io || io.status() != Io_Status::Ok)
            {
                throw error("@SYS19358");
            }

            progress = SysOperationProgress::construct();
            progress.setCaption("@SYS305922");
            progress.setAnimation(#AviUpdate);

            csvLines = new Stack();

            while (io.status() == IO_Status::Ok)
            {
                csvCurrentLine = iO.read(); // To read file

                lineNumber++;
                
                // Uncomment to skip file header
                //if (lineNumber == 1)
                //  continue;

                csvLines.push(csvCurrentLine);
            }
        }
        catch
        {
            throw Exception::Error;
        }

        endLengthyOperation();
    }

    return csvLines;
}

```

