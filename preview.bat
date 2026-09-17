@echo off
title EchoNation - Rental Alat Musik Preview
echo ===================================================
echo      EchoNation Rental Alat Musik - Preview
echo ===================================================
echo.

if exist "%LOCALAPPDATA%\Programs\nodejs\node.exe" (
    set "PATH=%LOCALAPPDATA%\Programs\nodejs;%PATH%"
)

where node >nul 2>nul
if %errorlevel% equ 0 (
    echo [OK] Node.js terdeteksi.
    if not exist "node_modules\" (
        echo [INFO] Menginstal dependensi pertama kali...
        call npm.cmd install
    )
    echo [INFO] Menjalankan Vite Dev Server...
    call npm.cmd run dev
) else (
    echo [INFO] Node.js tidak ditemukan di PATH.
    echo [INFO] Membuka versi Standalone di browser Anda...
    start "" "standalone.html"
)
pause
