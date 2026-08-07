# Sportify — Design System (Color Tokens)

> Version: 0.1 · Last updated: 2026-07-31
> Sumber: Figma variable export — `1785728152520_Dark_Mode_tokens.json` & `1785728152526_Light_Mode_tokens.json`.
> Cakupan dokumen ini: **hanya Color System** (semantic tokens, utility scale, komponen Button). Kategori lain pada checklist "ANALYZE THE DESIGN SYSTEM" (Typography, Spacing, Radius, Shadow, Grid/Breakpoints, Icons, Input/Card/Table/Chart/Modal non-color spec, Accessibility rules di luar kontras warna) **belum tersedia di file yang diupload** — lihat Bagian 7 (Open Items) sebelum Phase 1 Architecture dikunci penuh.

---

## 1. Ringkasan Identitas Warna
Sistem warna ini mendukung **dua mode: Light & Dark**, dengan brand color yang konsisten dengan hasil diskusi color theory sebelumnya:

| Role | Hex | Catatan |
|---|---|---|
| **Brand Primary** | `#FF8A3D` (oranye) | `utility-brand-500` — sama di Light & Dark mode |
| **Secondary/Accent Brand** | `#3D6FFF` (biru) | `bg-secondary-color-solid` — dipakai untuk elemen sekunder/data |
| **Error** | skala `utility-error` (base `#F14437` / `#D92D21`) | |
| **Warning** | skala `utility-warning` (base `#F79008`) | |
| **Success** | skala `utility-success` (base `#19B26B`) | |
| **Info** | skala `utility-info` (base `#006BFF`) | |

## 2. Semantic Tokens — Text
| Token | Light | Dark |
|---|---|---|
| `text-primary` | `#181D27` | `#F7F7F7` |
| `text-secondary` | *(gray-700 scale)* | `#CECFD2` |
| `text-tertiary` | *(gray-500 scale)* | `#95979D` |
| `text-brand-primary` | `#FF8A3D` | `#FFA062` |
| `text-secondary-brand` | `#3D6FFF` | `#648CFF` |
| `text-error` | `#F14437` (scale) | `#F97066` |
| `text-warning` | `#FDB022`/`#F79008` (scale) | `#FDB022` |
| `text-success` | `#19B26B` (scale) | `#46CD89` |
| `text-info` | `#006BFF` (scale) | `#3389FF` |

## 3. Semantic Tokens — Background
| Token | Light | Dark |
|---|---|---|
| `bg-primary` | `#FFFFFF` | `#0C0E12` |
| `bg-secondary` | `#FAFAFA` | `#14161B` |
| `bg-tertiary` | *(gray-100/200 scale)* | `#22262F` |
| `bg-brand-primary` | `#FFEEE3` | `#22262F` |
| `bg-brand-solid` | `#FF8A3D` | `#FFA062` |
| `bg-brand-solid_hover` | `#AB571F` | `#FF8A3D` |
| `bg-secondary-color` | `#D8E2FF` | `#3D6FFF` |
| `bg-secondary-color-solid` | `#3D6FFF` | `#648CFF` |
| `bg-error-primary` | `#F14437` | `#F14437` |
| `bg-warning-primary` | `#F79008` | `#F79008` |
| `bg-success-primary` | `#19B26B` | `#19B26B` |
| `bg-info-primary` | `#006BFF` | `#006BFF` |

## 4. Semantic Tokens — Border & Foreground (Ikon)
| Token | Light | Dark |
|---|---|---|
| `border-primary` | `#E9EAEB` | `#22262F` |
| `border-brand` | `#FF8A3D` | `#FFA062` |
| `border-error` | `#F14437` scale | `#F97066` |
| `fg-brand-primary_alt` | `#E67931` | `#FF8A3D` |
| `fg-error` | `#F14437` | `#F14437` |

## 5. Utility Color Scale (25/50–900)
Dipakai untuk variasi intensitas (badge, chart, hover state, dsb), bukan langsung sebagai token semantic di atas.

### Brand (Oranye)
| Step | Light | Dark |
|---|---|---|
| 25 | `#FFF9F5` | `#663412` |
| 50 | `#FFEEE3` | `#44220C` |
| 100 | `#FFE3D0` | `#663412` |
| 200 | `#FFCDAB` | `#894519` |
| 300 | `#FFB687` | `#AB571F` |
| 400 | `#FFA062` | `#E67931` |
| **500 (base)** | **`#FF8A3D`** | **`#FF8A3D`** |
| 600 | `#E67931` | `#FFA062` |
| 700 | `#AB571F` | `#FFB687` |
| 800 | `#894519` | `#FFCDAB` |
| 900 | `#663412` | `#FFE3D0` |

### Gray
| Step | Light | Dark |
|---|---|---|
| 25 | `#FDFDFD` | `#14161B` |
| 50 | `#FAFAFA` | `#14161B` |
| 100 | `#F5F5F5` | `#22262F` |
| 200 | `#E9EAEB` | `#383A41` |
| 300 | `#D5D7DA` | `#61656C` |
| 400 | `#A3A7AE` | `#84888E` |
| 500 | `#717680` | `#95979D` |
| 600 | `#535862` | `#FFB687`* |
| 700 | `#414651` | `#ECECED` |
| 800 | `#252B37` | `#F0F0F1` |
| 900 | `#181D27` | `#F7F7F7` |

*\*Catatan: nilai gray-600 di Dark Mode (`#FFB687`) tampak seperti anomali/kemungkinan typo dari file asli (nilai oranye muncul di skala gray) — perlu dikonfirmasi ke tim desain sebelum dipakai di implementasi, jangan diasumsikan benar begitu saja.*

### Error
| Step | Light | Dark |
|---|---|---|
| 50 | `#FEF3F2` | `#4E1D09` |
| 100 | `#FEE4E2` | `#7A2E0D` |
| 200 | `#FECDCA` | `#912019` |
| 300 | `#FDA29B` | `#B42419` |
| 400 | `#F97066` | `#D92D21` |
| 500 | `#F14437` | `#F14437` |
| 600 | `#D92D21` | `#F97066` |
| 700 | `#B42419` | `#FDA29B` |

### Warning
| Step | Light | Dark |
|---|---|---|
| 50 | `#FFFAEA` | `#4E1D09` |
| 100 | `#FEF1C6` | `#7A2E0D` |
| 200 | `#FEDF88` | `#93370E` |
| 300 | `#FFC84B` | `#B54707` |
| 400 | `#FDB022` | `#DC6903` |
| 500 | `#F79008` | `#F79008` |
| 600 | `#DC6903` | `#FDB022` |
| 700 | `#B54707` | `#FFC84B` |

### Success
| Step | Light | Dark |
|---|---|---|
| 50 | `#ECFEF3` | `#053321` |
| 100 | `#DCFAE6` | `#084D31` |
| 200 | `#A9EFC5` | `#065D3A` |
| 300 | `#75E1A7` | `#047647` |
| 400 | `#46CD89` | `#079455` |
| 500 | `#19B26B` | `#19B26B` |
| 600 | `#079455` | `#46CD89` |
| 700 | `#047647` | `#75E1A7` |

### Info
| Step | Light | Dark |
|---|---|---|
| 50 | `#E5F0FF` | `#001533` |
| 100 | `#CEE3FF` | `#00275C` |
| 200 | `#A5CBFF` | `#003885` |
| 300 | `#7CB3FF` | `#0049AD` |
| 400 | `#3389FF` | `#005AD6` |
| 500 | `#006BFF` | `#006BFF` |
| 600 | `#005AD6` | `#7CB3FF` |
| 700 | `#0049AD` | `#7CB3FF` |

## 6. Komponen: Button (Fully Specified)
Satu-satunya komponen yang tokennya sudah lengkap (default + hover, Light + Dark).

| Variant | State | Light | Dark |
|---|---|---|---|
| **Primary** | fg | `#FFFFFF` | `#FFFFFF` |
| | bg | `#FF8A3D` | `#FF8A3D` |
| | bg hover | `#AB571F` | `#E67931` |
| **Secondary** | fg | `#414651` | `#CECFD2` |
| | fg hover | `#252B37` | `#F0F0F1` |
| | bg | `#FFFFFF` | `#14161B` |
| | bg hover | `#FAFAFA` | `#22262F` |
| | border | `#D5D7DA` | `#383A41` |
| **Secondary Color** (brand-tinted) | fg | `#AB571F` | `#CECFD2` |
| | fg hover | `#894519` | `#F0F0F1` |
| | bg | `#FFFFFF` | `#14161B` |
| | bg hover | `#FFEEE3` | `#22262F` |
| | border | `#FFB687` | `#383A41` |
| **Tertiary** | fg | `#535862` | `#95979D` |
| | fg hover | `#414651` | `#ECECED` |
| | bg hover | `#FAFAFA` | `#22262F` |
| **Primary Error** | fg | `#FFFFFF` | `#FFFFFF` |
| | bg | `#D92D21` | `#D92D21` |
| | bg hover | `#B42419` | `#B42419` |
| **Secondary Error** | fg | `#B42419` | `#FECDCA` |
| | bg | `#FFFFFF` | `#4E1D09` |
| | border | `#FDA29B` | `#912019` |
| **Tertiary Error** | fg | `#B42419` | `#FDA29B` |
| | bg hover | `#FEF3F2` | `#7A2E0D` |

**Pemetaan ke penggunaan di Sportify (usulan, perlu divalidasi tim desain):**
- **Primary button** (oranye solid): CTA utama — "Tambah Workout", "Tambah Kalori", "Simpan", "Daftar/Masuk".
- **Secondary Color button**: aksi sekunder yang masih terkait brand — mis. "Lihat Semua Riwayat".
- **Secondary/Tertiary button**: aksi netral — "Batal", "Kembali".
- **Primary/Secondary/Tertiary Error button**: aksi destruktif — "Hapus Log Workout", "Hapus Akun".

## 7. Open Items (Belum Tersedia di File Ini)
Sesuai prinsip "jangan diam-diam invent requirement" dari Master Development Workflow, kategori berikut **belum bisa diisi** karena tidak ada di file token yang diupload — perlu dilengkapi (idealnya dari file token Figma tambahan atau akses Figma MCP) sebelum Phase 1 Architecture benar-benar final:
- Typography (font family, ukuran, weight, line-height, heading scale)
- Spacing scale & grid/layout rules
- Border radius scale
- Shadow/elevation scale
- Breakpoints (definisi persis desktop/tablet/mobile)
- Icon set/library yang dipakai
- Spesifikasi non-warna untuk: Input, Card, Metric Card, Table, Chart, Modal, Dropdown, Toast — token warnanya sudah bisa diturunkan dari Bagian 2–5 di atas, tapi ukuran/spacing/perilaku interaksi komponen ini belum ada
- Aturan aksesibilitas di luar kontras warna (mis. focus ring style, motion-reduce behavior)
- Konfirmasi apakah nilai `gray-600` Dark Mode (`#FFB687`, lihat catatan Bagian 5) benar atau typo dari sumber asli

## 8. Cara Konsumsi Token di Kode
Sesuai arahan Master Development Workflow ("aplikasi harus mengonsumsi Design System, bukan meniru ulang style secara manual"):
- Simpan seluruh token di atas sebagai CSS variables per mode, mis. `:root[data-theme="light"] { --bg-brand-solid: #FF8A3D; ... }` dan `:root[data-theme="dark"] { --bg-brand-solid: #FF8A3D; ... }`.
- Nama variable mengikuti penamaan semantic asli dari Figma (`bg-primary`, `text-secondary`, `button-primary-bg`, dst.) agar tetap traceable ke sumber Figma saat sinkronisasi token berikutnya.
- Komponen (Button, dst.) mengonsumsi variable semantic ini, bukan hex langsung — supaya switching Light/Dark mode otomatis konsisten di seluruh aplikasi.
