lcars
=====

HTML5 canvas based LCARS UI builder.

LCARS
=====

I'm creating a UI for my 3D print designed to look like a Replicator Terminal.

Its fundementally two parts: a pronsole->NodeJS->websocket server and a HTML5 based UI for the terminal.

Network Protocol
================

|---------------|---------------------------|
|Command        |Message                    |
|---------------|---------------------------|
|gettemp        |null                       |       
|temp           |float,temp                 |       
|getloc         |null                       |
|loc		    |float,x float,y            |   
|getPrint	    |null                       |
|print		    |fileName                   |
|---------------|---------------------------|
|cmd		    |text                       |
|reply		    |text                       |
|---------------|---------------------------|
|post		    |user,string message,string |
|broadcast	    |user,string message,string |
|getHistory     |null                       |
|history		|message,string[]           |
|---------------|---------------------------|
