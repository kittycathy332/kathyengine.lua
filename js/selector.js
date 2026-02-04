function createSidebarContent(prefix) {
	// Create elements
	if(prefix == null) prefix = '';
	const sidebarNav = document.getElementsByClassName('sidebar')[0];
	sidebarNav.style.visibility = 'visible';

	const searchInput = document.createElement('input');
	searchInput.type = 'text';
	searchInput.id = 'searchInput';
	searchInput.placeholder = 'Search for a Function...';

	const selectablesDiv = document.createElement('div');
	selectablesDiv.className = 'selectables';

	const itemList = document.createElement('ul');
	itemList.className = 'searchbar-child';
	itemList.id = 'itemList';

	// List items with categories
	const items = {
		// PlayState
		'startCountdown': { page: 'playstate.html', category: 'PlayState Functions' },
		'endSong': { page: 'playstate.html', category: 'PlayState Functions' },
		'getSongPosition': { page: 'playstate.html', category: 'PlayState Functions' },
		'restartSong': { page: 'playstate.html', category: 'PlayState Functions' },
		'exitSong': { page: 'playstate.html', category: 'PlayState Functions' },
		'loadSong': { page: 'playstate.html', category: 'PlayState Functions' },
		'triggerEvent': { page: 'playstate.html', category: 'PlayState Functions' },
		'setHealthBarColors': { page: 'playstate.html', category: 'PlayState Functions' },
		'setTimeBarColors': { page: 'playstate.html', category: 'PlayState Functions' },
		'startDialogue': { page: 'playstate.html', category: 'PlayState Functions' },
		'startVideo': { page: 'playstate.html', category: 'PlayState Functions' },

		// Reflection
		'getProperty': { page: 'reflection.html', category: 'Reflection Functions' },
		'getPropertyFromGroup': { page: 'reflection.html', category: 'Reflection Functions' },
		'getPropertyFromClass': { page: 'reflection.html', category: 'Reflection Functions' },
		'setProperty': { page: 'reflection.html', category: 'Reflection Functions' },
		'setPropertyFromGroup': { page: 'reflection.html', category: 'Reflection Functions' },
		'setPropertyFromClass': { page: 'reflection.html', category: 'Reflection Functions' },
		'callMethod': { page: 'reflection.html', category: 'Reflection Functions' },
		'callMethodFromClass': { page: 'reflection.html', category: 'Reflection Functions' },
		'instanceArg': { page: 'reflection.html', category: 'Reflection Functions' },
		'createInstance': { page: 'reflection.html', category: 'Reflection Functions' },
		'addInstance': { page: 'reflection.html', category: 'Reflection Functions' },
		'getObjectOrder': { page: 'reflection.html', category: 'Reflection Functions' },
		'setObjectOrder': { page: 'reflection.html', category: 'Reflection Functions' },
		'addToGroup': { page: 'reflection.html', category: 'Reflection Functions' },
		'removeFromGroup': { page: 'reflection.html', category: 'Reflection Functions' },
		'setObjectCamera': { page: 'reflection.html', category: 'Reflection Functions' },
		'setScrollFactor': { page: 'reflection.html', category: 'Reflection Functions' },
		'screenCenter': { page: 'reflection.html', category: 'Reflection Functions' },
		'scaleObject': { page: 'reflection.html', category: 'Reflection Functions' },
		'setGraphicSize': { page: 'reflection.html', category: 'Reflection Functions' },
		'updateHitbox': { page: 'reflection.html', category: 'Reflection Functions' },
		'setBlendMode': { page: 'reflection.html', category: 'Reflection Functions' },
		'getMidpointX': { page: 'reflection.html', category: 'Reflection Functions' },
		'getMidpointY': { page: 'reflection.html', category: 'Reflection Functions' },
		'getGraphicMidpointX': { page: 'reflection.html', category: 'Reflection Functions' },
		'getGraphicMidpointY': { page: 'reflection.html', category: 'Reflection Functions' },
		'getScreenPositionX': { page: 'reflection.html', category: 'Reflection Functions' },
		'getScreenPositionY': { page: 'reflection.html', category: 'Reflection Functions' },
		'getPixelColor': { page: 'reflection.html', category: 'Reflection Functions' },
		'objectsOverlap': { page: 'reflection.html', category: 'Reflection Functions' },

		// Spritesheet
		'makeLuaSprite': { page: 'spritesheet.html', category: 'Spritesheet Functions' },
		'makeAnimatedLuaSprite': { page: 'spritesheet.html', category: 'Spritesheet Functions' },
		'makeGraphic': { page: 'spritesheet.html', category: 'Spritesheet Functions' },
		'loadGraphic': { page: 'spritesheet.html', category: 'Spritesheet Functions' },
		'loadFrames': { page: 'spritesheet.html', category: 'Spritesheet Functions' },
		'loadMultipleFrames': { page: 'spritesheet.html', category: 'Spritesheet Functions' },
		'addAnimationByPrefix': { page: 'spritesheet.html', category: 'Spritesheet Functions' },
		'addAnimationByIndices': { page: 'spritesheet.html', category: 'Spritesheet Functions' },
		'addAnimation': { page: 'spritesheet.html', category: 'Spritesheet Functions' },
		'addOffset': { page: 'spritesheet.html', category: 'Spritesheet Functions' },
		'playAnim': { page: 'spritesheet.html', category: 'Spritesheet Functions' },
		'addLuaSprite': { page: 'spritesheet.html', category: 'Spritesheet Functions' },
		'removeLuaSprite': { page: 'spritesheet.html', category: 'Spritesheet Functions' },
		'luaSpriteExists': { page: 'spritesheet.html', category: 'Spritesheet Functions' },

		// FlxAnimate
		'makeFlxAnimateSprite': { page: 'flxanimate.html', category: 'FlxAnimate Functions' },
		'loadAnimateAtlas': { page: 'flxanimate.html', category: 'FlxAnimate Functions' },
		'addAnimationBySymbol': { page: 'flxanimate.html', category: 'FlxAnimate Functions' },
		'addAnimationBySymbolIndices': { page: 'flxanimate.html', category: 'FlxAnimate Functions' },

		// Text
		'makeLuaText': { page: 'text.html', category: 'Text Functions' },
		'addLuaText': { page: 'text.html', category: 'Text Functions' },
		'removeLuaText': { page: 'text.html', category: 'Text Functions' },
		'setTextString': { page: 'text.html', category: 'Text Functions' },
		'setTextSize': { page: 'text.html', category: 'Text Functions' },
		'setTextWidth': { page: 'text.html', category: 'Text Functions' },
		'setTextHeight': { page: 'text.html', category: 'Text Functions' },
		'setTextAutoSize': { page: 'text.html', category: 'Text Functions' },
		'setTextBorder': { page: 'text.html', category: 'Text Functions' },
		'setTextColor': { page: 'text.html', category: 'Text Functions' },
		'setTextFont': { page: 'text.html', category: 'Text Functions' },
		'setTextItalic': { page: 'text.html', category: 'Text Functions' },
		'setTextAlignment': { page: 'text.html', category: 'Text Functions' },
		'getTextString': { page: 'text.html', category: 'Text Functions' },
		'getTextSize': { page: 'text.html', category: 'Text Functions' },
		'getTextFont': { page: 'text.html', category: 'Text Functions' },
		'getTextWidth': { page: 'text.html', category: 'Text Functions' },
		'luaTextExists': { page: 'text.html', category: 'Text Functions' },

		// Sound
		'playSound': { page: 'sound.html', category: 'Sound Functions' },
		'playMusic': { page: 'sound.html', category: 'Sound Functions' },
		'soundFadeIn': { page: 'sound.html', category: 'Sound Functions' },
		'soundFadeOut': { page: 'sound.html', category: 'Sound Functions' },
		'soundFadeCancel': { page: 'sound.html', category: 'Sound Functions' },
		'stopSound': { page: 'sound.html', category: 'Sound Functions' },
		'pauseSound': { page: 'sound.html', category: 'Sound Functions' },
		'resumeSound': { page: 'sound.html', category: 'Sound Functions' },
		'getSoundVolume': { page: 'sound.html', category: 'Sound Functions' },
		'setSoundVolume': { page: 'sound.html', category: 'Sound Functions' },
		'getSoundTime': { page: 'sound.html', category: 'Sound Functions' },
		'setSoundTime': { page: 'sound.html', category: 'Sound Functions' },
		'getSoundPitch': { page: 'sound.html', category: 'Sound Functions' },
		'setSoundPitch': { page: 'sound.html', category: 'Sound Functions' },
		'luaSoundExists': { page: 'sound.html', category: 'Sound Functions' },

		// Camera
		'setCameraScroll': { page: 'camera.html', category: 'Camera Functions' },
		'setCameraFollowPoint': { page: 'camera.html', category: 'Camera Functions' },
		'addCameraScroll': { page: 'camera.html', category: 'Camera Functions' },
		'addCameraFollowPoint': { page: 'camera.html', category: 'Camera Functions' },
		'getCameraScrollX': { page: 'camera.html', category: 'Camera Functions' },
		'getCameraScrollY': { page: 'camera.html', category: 'Camera Functions' },
		'getCameraFollowX': { page: 'camera.html', category: 'Camera Functions' },
		'getCameraFollowY': { page: 'camera.html', category: 'Camera Functions' },
		'cameraSetTarget': { page: 'camera.html', category: 'Camera Functions' },
		'cameraShake': { page: 'camera.html', category: 'Camera Functions' },
		'cameraFlash': { page: 'camera.html', category: 'Camera Functions' },
		'cameraFade': { page: 'camera.html', category: 'Camera Functions' },

		// Input
		'mouseClicked': { page: 'input.html', category: 'Input Functions' },
		'mousePressed': { page: 'input.html', category: 'Input Functions' },
		'mouseReleased': { page: 'input.html', category: 'Input Functions' },
		'getMouseX': { page: 'input.html', category: 'Input Functions' },
		'getMouseY': { page: 'input.html', category: 'Input Functions' },
		'keyJustPressed': { page: 'input.html', category: 'Input Functions' },
		'keyPressed': { page: 'input.html', category: 'Input Functions' },
		'keyReleased': { page: 'input.html', category: 'Input Functions' },
		'keyboardJustPressed': { page: 'input.html', category: 'Input Functions' },
		'keyboardPressed': { page: 'input.html', category: 'Input Functions' },
		'keyboardReleased': { page: 'input.html', category: 'Input Functions' },
		'anyGamepadJustPressed': { page: 'input.html', category: 'Input Functions' },
		'anyGamepadPressed': { page: 'input.html', category: 'Input Functions' },
		'anyGamepadReleased': { page: 'input.html', category: 'Input Functions' },
		'gamepadJustPressed': { page: 'input.html', category: 'Input Functions' },
		'gamepadPressed': { page: 'input.html', category: 'Input Functions' },
		'gamepadReleased': { page: 'input.html', category: 'Input Functions' },
		'gamepadAnalogX': { page: 'input.html', category: 'Input Functions' },
		'gamepadAnalogY': { page: 'input.html', category: 'Input Functions' },

		// Tween
		'startTween': { page: 'tween.html', category: 'Tween Functions' },
		'doTweenX': { page: 'tween.html', category: 'Tween Functions' },
		'doTweenY': { page: 'tween.html', category: 'Tween Functions' },
		'doTweenAngle': { page: 'tween.html', category: 'Tween Functions' },
		'doTweenAlpha': { page: 'tween.html', category: 'Tween Functions' },
		'doTweenColor': { page: 'tween.html', category: 'Tween Functions' },
		'doTweenZoom': { page: 'tween.html', category: 'Tween Functions' },
		'noteTweenX': { page: 'tween.html', category: 'Tween Functions' },
		'noteTweenY': { page: 'tween.html', category: 'Tween Functions' },
		'noteTweenAngle': { page: 'tween.html', category: 'Tween Functions' },
		'noteTweenAlpha': { page: 'tween.html', category: 'Tween Functions' },
		'noteTweenDirection': { page: 'tween.html', category: 'Tween Functions' },
		'cancelTween': { page: 'tween.html', category: 'Tween Functions' },

		// Timer
		'runTimer': { page: 'timer.html', category: 'Timer Functions' },
		'cancelTimer': { page: 'timer.html', category: 'Timer Functions' },

		// Character
		'getCharacterX': { page: 'character.html', category: 'Character Functions' },
		'getCharacterY': { page: 'character.html', category: 'Character Functions' },
		'setCharacterX': { page: 'character.html', category: 'Character Functions' },
		'setCharacterY': { page: 'character.html', category: 'Character Functions' },
		'characterDance': { page: 'character.html', category: 'Character Functions' },

		// Substate
		'openCustomSubstate': { page: 'substate.html', category: 'Substate Functions' },
		'closeCustomSubstate': { page: 'substate.html', category: 'Substate Functions' },
		'insertToCustomSubstate': { page: 'substate.html', category: 'Substate Functions' },
		
		// Discord
		'changeDiscordPresence': { page: 'discord.html', category: 'Discord Functions' },
		'changeDiscordClientID': { page: 'discord.html', category: 'Discord Functions' },

		// Achievements
		'getAchievementScore': { page: 'achievements.html', category: 'Achievements Functions' },
		'setAchievementScore': { page: 'achievements.html', category: 'Achievements Functions' },
		'addAchievementScore': { page: 'achievements.html', category: 'Achievements Functions' },
		'unlockAchievement': { page: 'achievements.html', category: 'Achievements Functions' },
		'isAchievementUnlocked': { page: 'achievements.html', category: 'Achievements Functions' },
		'achievementExists': { page: 'achievements.html', category: 'Achievements Functions' },

		// Translations
		'getTranslationPhrase': { page: 'translations.html', category: 'Language/Translation Functions' },
		'getFileTranslation': { page: 'translations.html', category: 'Language/Translation Functions' },

		// Precache
		'precacheImage': { page: 'precache.html', category: 'Precache Functions' },
		'precacheSound': { page: 'precache.html', category: 'Precache Functions' },
		'precacheMusic': { page: 'precache.html', category: 'Precache Functions' },
		'addCharacterToList': { page: 'precache.html', category: 'Precache Functions' },

		// Score
		'addScore': { page: 'score.html', category: 'Score Functions' },
		'setScore': { page: 'score.html', category: 'Score Functions' },
		'addMisses': { page: 'score.html', category: 'Score Functions' },
		'setMisses': { page: 'score.html', category: 'Score Functions' },
		'addHits': { page: 'score.html', category: 'Score Functions' },
		'setHits': { page: 'score.html', category: 'Score Functions' },
		'getHealth': { page: 'score.html', category: 'Score Functions' },
		'addHealth': { page: 'score.html', category: 'Score Functions' },
		'setHealth': { page: 'score.html', category: 'Score Functions' },
		'setRatingPercent': { page: 'score.html', category: 'Score Functions' },
		'setRatingName': { page: 'score.html', category: 'Score Functions' },
		'setRatingFC': { page: 'score.html', category: 'Score Functions' },
		'updateScoreText': { page: 'score.html', category: 'Score Functions' },

		// Save Data
		'initSaveData': { page: 'savedata.html', category: 'Save Data Functions' },
		'flushSaveData': { page: 'savedata.html', category: 'Save Data Functions' },
		'eraseSaveData': { page: 'savedata.html', category: 'Save Data Functions' },
		'getDataFromSave': { page: 'savedata.html', category: 'Save Data Functions' },
		'setDataFromSave': { page: 'savedata.html', category: 'Save Data Functions' },

		// File I/O
		'getTextFromFile': { page: 'file.html', category: 'File I/O Functions' },
		'checkFileExists': { page: 'file.html', category: 'File I/O Functions' },
		'saveFile': { page: 'file.html', category: 'File I/O Functions' },
		'deleteFile': { page: 'file.html', category: 'File I/O Functions' },
		'directoryFileList': { page: 'file.html', category: 'File I/O Functions' },

		// Script
		'getRunningScripts': { page: 'script.html', category: 'Script Functions' },
		'callScript': { page: 'script.html', category: 'Script Functions' },
		'addLuaScript': { page: 'script.html', category: 'Script Functions' },
		'addHScript': { page: 'script.html', category: 'Script Functions' },
		'removeLuaScript': { page: 'script.html', category: 'Script Functions' },
		'removeHScript': { page: 'script.html', category: 'Script Functions' },
		'isRunning': { page: 'script.html', category: 'Script Functions' },
		'setVar': { page: 'script.html', category: 'Script Functions' },
		'getVar': { page: 'script.html', category: 'Script Functions' },
		'setOnScripts': { page: 'script.html', category: 'Script Functions' },
		'setOnLuas': { page: 'script.html', category: 'Script Functions' },
		'setOnHScript': { page: 'script.html', category: 'Script Functions' },
		'callOnScripts': { page: 'script.html', category: 'Script Functions' },
		'callOnHScript': { page: 'script.html', category: 'Script Functions' },
		'callOnLuas': { page: 'script.html', category: 'Script Functions' },
		'runHaxeCode': { page: 'script.html', category: 'Script Functions' },
		'runHaxeFunction': { page: 'script.html', category: 'Script Functions' },
		'addHaxeLibrary': { page: 'script.html', category: 'Script Functions' },
		'close': { page: 'script.html', category: 'Script Functions' },

		// Shaders
		'initLuaShader': { page: 'shaders.html', category: 'Shaders Functions' },
		'setSpriteShader': { page: 'shaders.html', category: 'Shaders Functions' },
		'removeSpriteShader': { page: 'shaders.html', category: 'Shaders Functions' },
		'getShaderBool': { page: 'shaders.html', category: 'Shaders Functions' },
		'getShaderBoolArray': { page: 'shaders.html', category: 'Shaders Functions' },
		'getShaderInt': { page: 'shaders.html', category: 'Shaders Functions' },
		'getShaderIntArray': { page: 'shaders.html', category: 'Shaders Functions' },
		'getShaderFloat': { page: 'shaders.html', category: 'Shaders Functions' },
		'getShaderFloatArray': { page: 'shaders.html', category: 'Shaders Functions' },
		'setShaderBool': { page: 'shaders.html', category: 'Shaders Functions' },
		'setShaderBoolArray': { page: 'shaders.html', category: 'Shaders Functions' },
		'setShaderInt': { page: 'shaders.html', category: 'Shaders Functions' },
		'setShaderIntArray': { page: 'shaders.html', category: 'Shaders Functions' },
		'setShaderFloat': { page: 'shaders.html', category: 'Shaders Functions' },
		'setShaderFloatArray': { page: 'shaders.html', category: 'Shaders Functions' },
		'setShaderSampler2D': { page: 'shaders.html', category: 'Shaders Functions' },

		// Uncategorized
		'FlxColor': { page: 'uncategorized.html', category: 'Uncategorized Functions' },
		'getColorFromName': { page: 'uncategorized.html', category: 'Uncategorized Functions' },
		'getColorFromString': { page: 'uncategorized.html', category: 'Uncategorized Functions' },
		'getColorFromHex': { page: 'uncategorized.html', category: 'Uncategorized Functions' },
		'stringStartsWith': { page: 'uncategorized.html', category: 'Uncategorized Functions' },
		'stringEndsWith': { page: 'uncategorized.html', category: 'Uncategorized Functions' },
		'stringSplit': { page: 'uncategorized.html', category: 'Uncategorized Functions' },
		'stringTrim': { page: 'uncategorized.html', category: 'Uncategorized Functions' },
		'getRandomBool': { page: 'uncategorized.html', category: 'Uncategorized Functions' },
		'getRandomInt': { page: 'uncategorized.html', category: 'Uncategorized Functions' },
		'getRandomFloat': { page: 'uncategorized.html', category: 'Uncategorized Functions' },
		'debugPrint': { page: 'uncategorized.html', category: 'Uncategorized Functions' },
		'getModSetting': { page: 'uncategorized.html', category: 'Uncategorized Functions' }
	};

	// Create list elements and append to itemList
	let num = 0;
	for (let item in items)
	{
		const link = document.createElement('a');
		link.href = prefix + items[item].page + "#" + item;
		link.className = 'selectable-link';

		const listItem = document.createElement('li');
		listItem.className = 'searchbar-child';

		// Create span for function name
		const funcName = document.createElement('span');
		funcName.textContent = item;
		funcName.className = 'function-name';

		// Create span for category
		const category = document.createElement('span');
		category.textContent = ' - ' + items[item].category;
		category.className = 'function-category';

		listItem.appendChild(funcName);
		listItem.appendChild(category);
		link.appendChild(listItem);
		itemList.appendChild(link);
		num++;
	}
	console.log('Found ' + num + ' functions');

	// Append elements to their parents
	selectablesDiv.appendChild(itemList);
	sidebarNav.appendChild(searchInput);

	const collapsingArrow = document.createElement('i')
	collapsingArrow.classList.add('arrow')
	sidebarNav.append(collapsingArrow)

	collapsingArrow.addEventListener('click', function() {
		if (sidebarNav.getAttribute('collapsed') != 'true') {
			sidebarNav.setAttribute('collapsed', 'true')
		} else {
			sidebarNav.setAttribute('collapsed', 'false')
		}
	})

	sidebarNav.appendChild(selectablesDiv);
}