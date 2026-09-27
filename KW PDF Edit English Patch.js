/*
 * ============================================================
 * kw-pdf-edit English Patch
 * Version: 1.4
 * Updated: 2026-09-27
 * ============================================================
 *
 * English localization patch for the kw-pdf-edit Kintone plugin.
 * Desktop + Kintone Mobile App / Android WebView support.
 *
 * v1.4:
 * - Restores desktop translation of exact known strings even when
 *   the rendered control is not inside a kwpe-* ancestor.
 * - Keeps dynamic/pattern translations restricted to kw-pdf-edit.
 * - Keeps the 250 ms mobile/WebView enforcement sweep.
 * - Does not modify Kintone record data or actual attachment names.
 *
 * ============================================================
 */

(function () {
  'use strict';

  const PATCH_NAME = 'kw-pdf-edit English Patch';
  const PATCH_VERSION = '1.4';


  /*
   * ============================================================
   * EXACT TRANSLATIONS
   * ============================================================
   */

  const translations = {

    // ----------------------------------------------------------
    // File controls
    // ----------------------------------------------------------

    'ファイルをダウンロード':
      'Download File',


    // ----------------------------------------------------------
    // Viewer
    // ----------------------------------------------------------

    '前のページ':
      'Previous Page',

    '次のページ':
      'Next Page',

    '縮小':
      'Zoom Out',

    '拡大':
      'Zoom In',

    '全画面':
      'Full Screen',

    'ウィンドウいっぱいに広げる':
      'Fit to Window',

    '閉じる':
      'Close',

    '標準':
      'Actual Size',

    '元の大きさに戻す':
      'Restore Original Size',


    // ----------------------------------------------------------
    // Main tools
    // ----------------------------------------------------------

    '選択':
      'Select',

    '手のひら':
      'Hand',

    'サイン':
      'Signature',

    '画像':
      'Image',

    '手書き':
      'Freehand',

    'テキスト':
      'Text',

    '図形':
      'Shape',

    '矢印':
      'Arrow',

    '墨消し':
      'Redact',


    // ----------------------------------------------------------
    // Editing actions
    // ----------------------------------------------------------

    '↶ 元に戻す':
      '↶ Undo',

    '↷ やり直す':
      '↷ Redo',

    '選択を削除':
      'Delete Selection',

    '背面へ':
      'Send to Back',

    '前面へ':
      'Bring to Front',

    '保存する':
      'Save',


    // ----------------------------------------------------------
    // Instructions
    // ----------------------------------------------------------

    '配置済みのものをクリックすると、色・太さ・塗り・形をあとから直せます（どのツールを選んでいても、ダブルクリックで直接つかめます）。':
      'Click an existing object to change its color, thickness, fill, or shape. You can also double-click an object to select it directly, regardless of the active tool.',

    '消したい範囲をドラッグしてください。保存時に 150dpi で焼き直し、元の文字・画像をファイルから削除します（取り消せません）。':
      'Drag over the area you want to redact. When saved, the page will be flattened at 150 dpi and the original text and images will be permanently removed. This cannot be undone.',

    'ここでの設定は「次に描くもの」に使われます。配置済みのものは「選択」ツール（またはダブルクリック）で直せます。':
      'These settings apply to the next object you draw. To modify an existing object, use the Select tool or double-click it.',

    'ドラッグでページを動かせます。ほかのツールを選んでいるときも、Space を押している間・マウス中ボタンのドラッグで動かせます（Ctrl＋ホイールで拡大縮小）。':
      'Drag to move the page. While using another tool, hold Space or drag with the middle mouse button to move the page. Use Ctrl + mouse wheel to zoom.',


    // ----------------------------------------------------------
    // General properties
    // ----------------------------------------------------------

    '色':
      'Color',

    '色を選ぶ':
      'Choose Color',

    '太さ':
      'Thickness',

    '始点':
      'Start',

    '終点':
      'End',

    '形':
      'Shape',

    '大きさ':
      'Size',

    '小さく':
      'Smaller',

    '大きく':
      'Larger',

    '選択中':
      'Selected',


    // ----------------------------------------------------------
    // Shapes
    // ----------------------------------------------------------

    '四角':
      'Rectangle',

    '角丸四角':
      'Rounded Rectangle',

    '円':
      'Ellipse',

    '三角':
      'Triangle',

    'ひし形':
      'Diamond',

    'マーカー':
      'Marker',

    'チェック':
      'Check',

    'バツ':
      'X',

    '多角形':
      'Polygon',


    // ----------------------------------------------------------
    // Shape properties
    // ----------------------------------------------------------

    '枠線':
      'Border',

    '枠線の太さ':
      'Border Thickness',

    '塗り':
      'Fill',

    'なし':
      'None',


    // ----------------------------------------------------------
    // Text
    // ----------------------------------------------------------

    '書体':
      'Font',

    'ゴシック':
      'Sans Serif',

    '明朝':
      'Serif',

    '文字サイズ':
      'Font Size',

    '文字色':
      'Text Color',

    '行揃え':
      'Alignment',

    '左':
      'Left',

    '中央':
      'Center',

    '右':
      'Right',


    // ----------------------------------------------------------
    // Font loading
    // ----------------------------------------------------------

    'フォントを読み込んでいます…':
      'Loading font...',

    '日本語フォントを読み込んでいます…':
      'Loading Japanese font...',


    // ----------------------------------------------------------
    // Freehand
    // ----------------------------------------------------------

    'ペンの色':
      'Pen Color',

    '直前のストロークを消す':
      'Undo Last Stroke',


    // ----------------------------------------------------------
    // Images
    // ----------------------------------------------------------

    '登録画像':
      'Saved Images',

    'パソコンから画像を選ぶ':
      'Choose Image from Device',

    '画像を置いたあと、四隅で拡大縮小・上のハンドルで回転できます。':
      'After placing an image, use the corner handles to resize it and the top handle to rotate it.',


    // ----------------------------------------------------------
    // Signature
    // ----------------------------------------------------------

    'サインを書く':
      'Add Signature',

    '「サインを書く」を押すと、画面いっぱいの欄に大きく書けます。書いたサインはすぐページに表示されます。':
      'Select Add Signature to sign in a full-screen area. Your signature will appear on the page immediately.',

    'サインをお願いします':
      'Please Sign',

    'キャンセル':
      'Cancel',

    'サインを書く欄':
      'Signature Area',

    'この枠の中に、指またはタッチペンで大きくサインしてください':
      'Sign inside this box using your finger or stylus.',


    // ----------------------------------------------------------
    // Signature colors
    // ----------------------------------------------------------

    '黒':
      'Black',

    '濃紺':
      'Dark Blue',


    // ----------------------------------------------------------
    // Signature thickness
    // ----------------------------------------------------------

    '太さ 2':
      'Thickness 2',

    '太さ 3':
      'Thickness 3',

    '太さ 4':
      'Thickness 4',

    '太さ 6':
      'Thickness 6',


    // ----------------------------------------------------------
    // Signature actions
    // ----------------------------------------------------------

    '1画消す':
      'Undo Last Stroke',

    '全部消す':
      'Clear All',

    'このサインを使う':
      'Use This Signature',


    // ----------------------------------------------------------
    // Post-signature UI
    // ----------------------------------------------------------

    '署名欄にサインを置きました。位置や大きさは調整できます。':
      'Signature placed in the signature area. You can adjust its position and size.',

    'サインを書き直す':
      'Redraw Signature',

    'このまま直す（選択ツールへ）':
      'Adjust This Signature (Switch to Select Tool)',

    'ドラッグで位置、「大きさ」で大小を調整できます。':
      'Drag to reposition; use "Size" to make it smaller or larger.',


    // ----------------------------------------------------------
    // Status
    // ----------------------------------------------------------

    'ファイルを読み込んでいます…':
      'Loading File...',

    'ページを描画しています…':
      'Rendering Page...',


    // ----------------------------------------------------------
    // Dialogs
    // ----------------------------------------------------------

    '変更がありません':
      'No Changes',

    '書き加えたものがありません。ページに何か配置してから保存してください。':
      'There are no changes to save. Add something to the page before saving.',

    '編集を閉じますか？':
      'Close Editor?',

    '保存していない変更は失われます。':
      'Unsaved changes will be lost.',

    '編集を続ける':
      'Continue Editing'
  };


  /*
   * ============================================================
   * CONSTANTS
   * ============================================================
   */

  const JP_REGEX =
    /[\u3040-\u30ff\u3400-\u9fff]/;


  const translatedAttributes = [
    'title',
    'aria-label',
    'placeholder',
    'alt'
  ];


  /*
   * ============================================================
   * BASIC HELPERS
   * ============================================================
   */

  function hasJapanese(value) {

    return JP_REGEX.test(
      String(value || '')
    );
  }


  function hasExactTranslation(value) {

    if (typeof value !== 'string') {
      return false;
    }


    const trimmed =
      value.trim();


    if (!trimmed) {
      return false;
    }


    return Object.prototype.hasOwnProperty.call(
      translations,
      trimmed
    );
  }


  /*
   * ============================================================
   * KW-PDF-ELEMENT CHECK
   * ============================================================
   */

  function isKwPdfElement(element) {

    if (
      !element ||
      element.nodeType !== Node.ELEMENT_NODE
    ) {
      return false;
    }


    try {

      if (
        String(
          element.className || ''
        ).includes('kwpe-')
      ) {

        return true;
      }


      if (
        element.closest &&
        element.closest(
          '[class*="kwpe-"]'
        )
      ) {

        return true;
      }


    } catch (e) {

      // Ignore transient DOM/WebView errors.
    }


    return false;
  }


  /*
   * ============================================================
   * DYNAMIC TRANSLATION
   * ============================================================
   *
   * IMPORTANT:
   *
   * Exact known translations may be used regardless of kwpe
   * ancestry.
   *
   * Dynamic translations are different. They contain filenames,
   * page numbers, etc., so they remain restricted to the PDF
   * editor.
   *
   * This prevents the patch from altering arbitrary Kintone
   * record content.
   * ============================================================
   */

  function translateDynamic(trimmed) {

    let result =
      trimmed;


    /*
     * ----------------------------------------------------------
     * Edited filename suffix
     *
     * example_編集済.pdf
     *
     * becomes:
     *
     * example_edited.pdf
     *
     * DISPLAY ONLY.
     *
     * The actual attachment filename is not renamed.
     * ----------------------------------------------------------
     */

    result =
      result.replace(
        /_編集済(?=\.pdf\b)/gi,
        '_edited'
      );


    /*
     * ----------------------------------------------------------
     * Edit filename label
     *
     * example.pdf を編集する
     *
     * becomes:
     *
     * Edit example.pdf
     * ----------------------------------------------------------
     */

    const editFileMatch =
      result.match(
        /^(.+?)\s*を編集する$/
      );


    if (editFileMatch) {

      result =
        `Edit ${editFileMatch[1]}`;
    }


    /*
     * ----------------------------------------------------------
     * Signature (Page X)
     *
     * サイン（1ページ目）
     *
     * becomes:
     *
     * Signature (Page 1)
     * ----------------------------------------------------------
     */

    result =
      result.replace(
        /サイン（(\d+)ページ目）/g,
        'Signature (Page $1)'
      );


    /*
     * ----------------------------------------------------------
     * Selected: Signature (Page X)
     *
     * First dynamic replacement may have already changed:
     *
     * サイン（1ページ目）
     *
     * into:
     *
     * Signature (Page 1)
     *
     * This second replacement finishes the string.
     * ----------------------------------------------------------
     */

    result =
      result.replace(
        /選択中：Signature \(Page (\d+)\)/g,
        'Selected: Signature (Page $1)'
      );


    /*
     * ----------------------------------------------------------
     * Signature placement banner
     * ----------------------------------------------------------
     */

    result =
      result.replace(
        /(\d+)ページ目の署名欄にサインを置きました。位置はドラッグ、大きさは「大きさ」で調整できます。/g,
        'Signature placed on page $1. Drag to reposition it, or use "Size" to adjust its size.'
      );


    return result;
  }


  /*
   * ============================================================
   * EXACT STRING TRANSLATION
   * ============================================================
   */

  function translateExact(value) {

    if (typeof value !== 'string') {
      return value;
    }


    const trimmed =
      value.trim();


    if (!trimmed) {
      return value;
    }


    if (
      !Object.prototype.hasOwnProperty.call(
        translations,
        trimmed
      )
    ) {

      return value;
    }


    return value.replace(
      trimmed,
      translations[trimmed]
    );
  }


  /*
   * ============================================================
   * DYNAMIC STRING TRANSLATION
   * ============================================================
   */

  function translateDynamicString(value) {

    if (typeof value !== 'string') {
      return value;
    }


    const trimmed =
      value.trim();


    if (
      !trimmed ||
      !hasJapanese(trimmed)
    ) {

      return value;
    }


    const dynamic =
      translateDynamic(
        trimmed
      );


    if (dynamic === trimmed) {
      return value;
    }


    return value.replace(
      trimmed,
      dynamic
    );
  }


  /*
   * ============================================================
   * TEXT NODE TRANSLATION
   * ============================================================
   *
   * v1.4 FIX:
   *
   * Exact known translations DO NOT require kwpe-* ancestry.
   *
   * This restores the desktop behavior that was accidentally
   * lost when later versions became too restrictive.
   *
   * Dynamic translations still require kw-pdf-edit context.
   * ============================================================
   */

  function translateTextNode(node) {

    if (
      !node ||
      node.nodeType !== Node.TEXT_NODE
    ) {

      return;
    }


    const parent =
      node.parentElement;


    if (!parent) {
      return;
    }


    if (
      [
        'SCRIPT',
        'STYLE',
        'NOSCRIPT'
      ].includes(
        parent.tagName
      )
    ) {

      return;
    }


    const original =
      node.nodeValue;


    if (
      !original ||
      !hasJapanese(original)
    ) {

      return;
    }


    /*
     * ----------------------------------------------------------
     * FIRST:
     *
     * Try an exact known translation.
     *
     * No kwpe-* requirement.
     * ----------------------------------------------------------
     */

    if (
      hasExactTranslation(
        original
      )
    ) {

      const translated =
        translateExact(
          original
        );


      if (
        translated !== original
      ) {

        node.nodeValue =
          translated;
      }


      return;
    }


    /*
     * ----------------------------------------------------------
     * SECOND:
     *
     * Dynamic translations.
     *
     * These remain restricted to kw-pdf-edit.
     * ----------------------------------------------------------
     */

    if (
      !isKwPdfElement(
        parent
      )
    ) {

      return;
    }


    const translated =
      translateDynamicString(
        original
      );


    if (
      translated !== original
    ) {

      node.nodeValue =
        translated;
    }
  }


  /*
   * ============================================================
   * ATTRIBUTE TRANSLATION
   * ============================================================
   *
   * v1.4 FIX:
   *
   * Exact known attribute values DO NOT require kwpe-* ancestry.
   *
   * Dynamic attribute values still require kw-pdf-edit context.
   * ============================================================
   */

  function translateAttributes(element) {

    if (
      !element ||
      element.nodeType !== Node.ELEMENT_NODE
    ) {

      return;
    }


    translatedAttributes.forEach(
      function (attribute) {

        let original = null;


        try {

          original =
            element.getAttribute(
              attribute
            );


        } catch (e) {

          return;
        }


        if (
          !original ||
          !hasJapanese(original)
        ) {

          return;
        }


        /*
         * ------------------------------------------------------
         * FIRST:
         *
         * Exact known attribute translation.
         *
         * No kwpe-* requirement.
         * ------------------------------------------------------
         */

        if (
          hasExactTranslation(
            original
          )
        ) {

          const translated =
            translateExact(
              original
            );


          if (
            translated !== original
          ) {

            try {

              element.setAttribute(
                attribute,
                translated
              );


            } catch (e) {

              // Ignore transient WebView errors.
            }
          }


          return;
        }


        /*
         * ------------------------------------------------------
         * SECOND:
         *
         * Dynamic attribute translation.
         *
         * Requires kw-pdf-edit context.
         * ------------------------------------------------------
         */

        if (
          !isKwPdfElement(
            element
          )
        ) {

          return;
        }


        const translated =
          translateDynamicString(
            original
          );


        if (
          translated !== original
        ) {

          try {

            element.setAttribute(
              attribute,
              translated
            );


          } catch (e) {

            // Ignore transient WebView errors.
          }
        }

      }
    );
  }


  /*
   * ============================================================
   * ELEMENT TRANSLATION
   * ============================================================
   */

  function translateElement(element) {

    if (
      !element ||
      element.nodeType !== Node.ELEMENT_NODE
    ) {

      return;
    }


    /*
     * Translate title / aria-label / placeholder / alt.
     */

    translateAttributes(
      element
    );


    /*
     * Translate direct text nodes.
     */

    try {

      [...element.childNodes]
        .forEach(
          function (node) {

            if (
              node.nodeType ===
              Node.TEXT_NODE
            ) {

              translateTextNode(
                node
              );
            }

          }
        );


    } catch (e) {

      // Ignore transient mobile DOM errors.
    }
  }


  /*
   * ============================================================
   * TREE SCANNER
   * ============================================================
   */

  function scanTree(root) {

    if (!root) {
      return;
    }


    /*
     * A text node may itself be supplied by MutationObserver.
     */

    if (
      root.nodeType ===
      Node.TEXT_NODE
    ) {

      translateTextNode(
        root
      );

      return;
    }


    /*
     * Only Elements and DocumentFragments can be traversed.
     */

    if (
      root.nodeType !==
        Node.ELEMENT_NODE &&
      root.nodeType !==
        Node.DOCUMENT_FRAGMENT_NODE
    ) {

      return;
    }


    /*
     * Translate root itself when root is an Element.
     */

    if (
      root.nodeType ===
      Node.ELEMENT_NODE
    ) {

      translateElement(
        root
      );
    }


    /*
     * Translate all descendants.
     */

    try {

      root
        .querySelectorAll('*')
        .forEach(
          translateElement
        );


    } catch (e) {

      // Ignore inaccessible/transient trees.
    }
  }


  /*
   * ============================================================
   * OPEN SHADOW ROOT SUPPORT
   * ============================================================
   */

  function scanShadowRoots() {

    try {

      document
        .querySelectorAll('*')
        .forEach(
          function (element) {

            if (
              element.shadowRoot
            ) {

              scanTree(
                element.shadowRoot
              );
            }

          }
        );


    } catch (e) {

      // Ignore inaccessible roots.
    }
  }


  /*
   * ============================================================
   * FULL SCAN
   * ============================================================
   */

  function fullScan() {

    if (
      !document.body
    ) {

      return;
    }


    scanTree(
      document.body
    );


    scanShadowRoots();
  }


  /*
   * ============================================================
   * MUTATION OBSERVER SCHEDULER
   * ============================================================
   */

  let scanScheduled =
    false;


  function scheduleScan() {

    if (
      scanScheduled
    ) {

      return;
    }


    scanScheduled =
      true;


    /*
     * Android WebView can construct plugin controls across
     * several DOM passes. Waiting 25 ms allows the plugin to
     * finish the current render batch before rescanning.
     */

    setTimeout(
      function () {

        scanScheduled =
          false;


        fullScan();

      },
      25
    );
  }


  /*
   * ============================================================
   * MUTATION OBSERVER
   * ============================================================
   */

  const observer =
    new MutationObserver(
      function (mutations) {

        mutations.forEach(
          function (mutation) {


            /*
             * --------------------------------------------------
             * Newly inserted UI
             * --------------------------------------------------
             */

            if (
              mutation.type ===
              'childList'
            ) {

              mutation.addedNodes
                .forEach(
                  function (node) {

                    if (
                      node.nodeType ===
                      Node.TEXT_NODE
                    ) {

                      translateTextNode(
                        node
                      );


                    } else if (
                      node.nodeType ===
                        Node.ELEMENT_NODE ||
                      node.nodeType ===
                        Node.DOCUMENT_FRAGMENT_NODE
                    ) {

                      scanTree(
                        node
                      );
                    }

                  }
                );
            }


            /*
             * --------------------------------------------------
             * Existing text changed
             * --------------------------------------------------
             */

            if (
              mutation.type ===
              'characterData'
            ) {

              translateTextNode(
                mutation.target
              );
            }


            /*
             * --------------------------------------------------
             * Attribute changed
             * --------------------------------------------------
             */

            if (
              mutation.type ===
              'attributes'
            ) {

              translateAttributes(
                mutation.target
              );
            }

          }
        );


        /*
         * Backup scan after mutation batch.
         */

        scheduleScan();

      }
    );


  /*
   * ============================================================
   * MOBILE / ANDROID WEBVIEW ENFORCEMENT SWEEP
   * ============================================================
   *
   * v1.3 established that the Kintone Android WebView can rebuild
   * kw-pdf-edit controls faster than the previous 750 ms backup
   * pass could reliably catch them.
   *
   * The successful mobile diagnostic test used a 250 ms recurring
   * scan.
   *
   * v1.4 retains that behavior.
   *
   * IMPORTANT:
   *
   * There is intentionally NO kwpe-* existence pre-check here.
   *
   * The plugin can temporarily remove/recreate its controls during
   * rendering. Requiring a kwpe-* element before running the scan
   * creates another timing race.
   * ============================================================
   */

  let backupSweep =
    null;


  function startBackupSweep() {

    if (
      backupSweep
    ) {

      return;
    }


    backupSweep =
      setInterval(
        function () {

          fullScan();

        },
        250
      );
  }


  /*
   * ============================================================
   * START PATCH
   * ============================================================
   */

  let started =
    false;


  function startPatch() {

    if (
      started ||
      !document.body
    ) {

      return;
    }


    started =
      true;


    /*
     * ----------------------------------------------------------
     * Initial translation
     * ----------------------------------------------------------
     */

    fullScan();


    /*
     * ----------------------------------------------------------
     * Watch future DOM changes
     * ----------------------------------------------------------
     */

    observer.observe(
      document.body,
      {
        childList:
          true,

        subtree:
          true,

        characterData:
          true,

        attributes:
          true,

        attributeFilter:
          translatedAttributes
      }
    );


    /*
     * ----------------------------------------------------------
     * Android/WebView enforcement sweep
     * ----------------------------------------------------------
     */

    startBackupSweep();


    /*
     * ----------------------------------------------------------
     * Delayed startup passes
     *
     * These catch controls initialized shortly after Kintone
     * loads the customization JavaScript.
     * ----------------------------------------------------------
     */

    setTimeout(
      fullScan,
      100
    );


    setTimeout(
      fullScan,
      500
    );


    setTimeout(
      fullScan,
      1000
    );


    setTimeout(
      fullScan,
      1500
    );


    setTimeout(
      fullScan,
      2000
    );


    setTimeout(
      fullScan,
      3000
    );


    /*
     * ----------------------------------------------------------
     * Console confirmation
     * ----------------------------------------------------------
     */

    console.log(
      `[${PATCH_NAME}] Version ${PATCH_VERSION} loaded`
    );
  }


  /*
   * ============================================================
   * INITIALIZATION
   * ============================================================
   */

  if (
    document.body
  ) {

    startPatch();


  } else {

    document.addEventListener(
      'DOMContentLoaded',
      startPatch,
      {
        once:
          true
      }
    );
  }

})();
