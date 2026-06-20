@echo off
REM ── Preview the ShowTime website exactly like the live site ──────────────
REM Double-click this file. It serves this folder over http://localhost:8000
REM (so root links like "/" work) and opens your browser. Close the server
REM window to stop. Do NOT open index.html directly — file:// breaks "/" links.
cd /d "%~dp0"
start "ShowTime preview server" cmd /k python -m http.server 8000
timeout /t 1 /nobreak >nul
start "" "http://localhost:8000/"
exit
